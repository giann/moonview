package.path = "lua_modules/share/lua/5.3/?.lua;lua_modules/share/lua/5.3/?/init.lua"

local moonview = require("moonview")

local View = moonview.View
local Model = moonview.Model

local m = Model {
    name = "John"
}

local v = View {
    target   = "#content",
    template = "#content-template",
    model    = m
}

v:render()

m.name = "Peter"
