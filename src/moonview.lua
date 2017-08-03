package.path = "lua_modules/share/lua/5.3/?.lua;lua_modules/share/lua/5.3/?/init.lua"

local global = js.global
local document = global.document

local q = require("moonview.helpers").q
local lustache = require("lustache")
local Class = require("hump.class")

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
