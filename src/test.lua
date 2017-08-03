package.path = "lua_modules/share/lua/5.3/?.lua;lua_modules/share/lua/5.3/?/init.lua"

local moonview = require("moonview")

local View = moonview.View

local v = View({
    target   = "#content",
    template = "#content-template",
    model    = {
        name = "John"
    }
})

v:render()
