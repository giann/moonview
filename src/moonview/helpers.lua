local global = js.global
local document = global.document

local Array = js.global.Array

-- If the userdata is a js Array, return a shifted copy of it
local shiftJsArray = function(userdata)
    assert(type(userdata) == "userdata", "shiftJsArray expect a js array")

    if (Array:isArray(userdata)) then
        return js.new(Array, 1):concat(userdata)
    end

    return userdata
end

-- Alias for document.querySelector
local q = function(query)
    return document:querySelector(query)
end

-- Alias for document.querySelectorAll
local qall = function(query)
    local result  = document:querySelectorAll(query)

    -- Store result in lua array
    local elements = {}
    for element in js.of(result) do
        table.insert(elements, element)
    end

    return elements
end

-- Fetch n url in parallel, must be run in a coroutine
local fetch = function(...)
    local co = coroutine.running()

    assert(co, "fetch must be called inside a running coroutine")

    local requests = {...}
    for i = 1, #requests do
        local promise = js.global:fetch(requests[i])
        promise["then"](promise, function(_, res)
            local textPromise = res:text()
            textPromise["then"](textPromise, function(_, text)
                coroutine.resume(co, i, text)
            end)
        end)
    end

    local results = {}
    for i = 1, #requests do
        local requestId, response = coroutine.yield()
        results[requestId] = response
    end

    return table.unpack(results)
end

-- Fetch n url in parallel, must be run in a coroutine
local fetchj = function(...)
    local co = coroutine.running()

    assert(co, "fetchj must be called inside a running coroutine")

    local requests = {...}
    for i = 1, #requests do
        local promise = js.global:fetch(requests[i])
        promise["then"](promise, function(_, res)
            local jsonPromise = res:json()
            jsonPromise["then"](jsonPromise, function(_, json)
                coroutine.resume(co, i, json)
            end)
        end)
    end

    local results = {}
    for i = 1, #requests do
        local requestId, response = coroutine.yield()
        results[requestId] = shiftJsArray(response)
    end

    return table.unpack(results)
end

-- Take full paths for now, should be in coroutine
local require = function(...)
    local co = coroutine.running()

    assert(co, "require must be called inside a running coroutine")

    local paths = {...}

    local modules = table.pack(fetch(co, table.unpack(paths)))

    for i = 1, #modules do
        local module = modules[i]

        modules[i] = load(module)
    end

    return table.unpack(modules)
end

string.split = function(str, sep)
    local result = {}
    sep = sep or " "

    for part in str:gmatch("[^" .. sep .. "]*") do
        table.insert(result, part)
    end

    return result
end

-- If e is empty, returns nil instead
local ornil = function(e)
    return #e > 0 and e or nil
end

return {
    fetch        = fetch,
    fetchj       = fetchj,
    ornil        = ornil,
    q            = q,
    qall         = qall,
    shiftJsArray = shiftJsArray
}
