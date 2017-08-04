package.path = "lua_modules/share/lua/5.3/?.lua;lua_modules/share/lua/5.3/?/init.lua"

local moonview = require("moonview")
local helpers  = require("moonview.helpers")
local Signal   = require("hump.signal")
local q        = helpers.q
local qall     = helpers.qall

local View       = moonview.View
local Model      = moonview.Model
local Collection = moonview.Collection

local m = Model {
    todos = Collection {
        { title = "todo item 1" }
    }
}

local v = View {
    target   = "#app",
    template = "#app-template",
    model    = m,
    events   = {
        ["click #add"] = function(self)
            table.insert(m.todos, {
                id = #m.todos + 1,
                title = q("#new-todo").value    
            })
        end,

        ["keydown #new-todo"] = function(self, context, event)
            if event.key == "Enter" then
                table.insert(m.todos, {
                    id = #m.todos + 1,
                    title = q("#new-todo").value    
                })
            end
        end,

        ["click .delete"] = function(self, context, event)
            table.remove(m.todos, context:getAttribute("data-row"))
        end
    }
}

Signal.register("collection-update", function(collection, i, element)
    if collection == m.todos then
        v:render()
    end
end)

v:render()
