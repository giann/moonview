package.path = "lua_modules/share/lua/5.3/?.lua;lua_modules/share/lua/5.3/?/init.lua"

local global = js.global
local document = global.document

local lustache = require("lustache")
local Class = require("hump.class")

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

local View = Class {

    init = function(self, options)
        self.template = options and options.template or nil
        self.target   = options and options.target or nil
        self.model    = options and options.model or {}
    end

}

function View:render()
    local template = self.template and q(self.template) or nil
    template = template and template.textContent or nil

    local target = self.target and q(self.target) or nil

    if target then
        target.innerHTML = lustache:render(template, self.model)
    end
end

return {
    View = View
}
