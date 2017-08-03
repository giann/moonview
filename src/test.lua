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
