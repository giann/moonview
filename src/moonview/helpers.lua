-- Alias for document.querySelectorAll
local q = function(query)
    local result  = document:querySelectorAll(query)

    -- Store result in lua array
    local elements = {}
    for i = 0, result.length - 1 do
        table.insert(elements, result[i])
    end

    if #elements > 0 then
        return #elements > 1 and elements or elements[1]
    end

    return nil
end

-- Fetch n url in parallel, must be run in a coroutine co
local fetch = function(co, ...)
    local requests = {...}
    for i = 1, #requests do
        local promise = js.global:fetch(requests[i])
        promise["then"](promise, function(_, res)
            local textPromise = res:text()
            textPromise["then"](textPromise, function(_, text)
                co(i, text)
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

-- Take full paths for now, should be in coroutine co
local require = function(co, ...)
    local paths = table.pack(...)

    local modules = table.pack(fetch(co, table.unpack(paths)))

    for i = 1, #modules do
        local module = modules[i]

        modules[i] = load(module)
    end

    return table.unpack(modules)
end

return {
    q = q,
    fetch = fetch
}
