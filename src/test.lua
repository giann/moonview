package.path = "src/?.lua;src/?/init.lua"

local moonview = require("moonview")

print(package.path)

local View = moonview.View

local v = View({
    target   = "#content",
    template = "#content-template",
    model    = {
        name = "John"
    }
})

v:render()
