package.path = "lua_modules/share/lua/5.3/?.lua;lua_modules/share/lua/5.3/?/init.lua"

local moonview = require("moonview")
local helpers = require("moonview.helpers")
local q = helpers.q
local qall = helpers.qall

local View = moonview.View
local Model = moonview.Model

local m = Model {
    name = "John"
}

local v = View {
    target   = "#content",
    template = "#content-template",
    model    = m,
    events   = {
        ["click #ok"] = function(self, event)
            self.model.name = q("#name").value
        end
    }
}

v:render()

m.name = "Peter"
