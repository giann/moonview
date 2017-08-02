package.path = "lua_modules/share/lua/5.3/?.lua;lua_modules/share/lua/5.3/?/init.lua"

local global = js.global
local document = global.document

local lustache = require("lustache")

-- Alias for document.querySelectorAll
local q = function(query)
    local result  = document:querySelectorAll(query)

    -- Store result in lua array
    local elements = {}
    for i = 0, result.length - 1 do
        table.insert(elements, result[i])
    end

    return elements
end

q("#content")[1].innerHTML = lustache:render("Hello {{name}}", { name = "there" })
