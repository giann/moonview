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
        {
            id = 1, -- Could be avoided if lustache gave access to index in loops
            title = "todo item 1"
        },
        {
            id = 2, -- Could be avoided if lustache gave access to index in loops
            title = "todo item 2"
        }
    },
    list = {
        {
            id = 1, -- Could be avoided if lustache gave access to index in loops
            title = "todo item 1"
        },
        {
            id = 2, -- Could be avoided if lustache gave access to index in loops
            title = "todo item 2"
        }
    }
}

local v = View {
    target   = "#app",
    template = "#app-template",
    model    = m,
    events   = {
        ["click #add"] = function(self, event)
            table.insert(m.todos, {
                id = #m.todos + 1,
                title = q("#new-todo").value    
            })
        end,

        ["click .remove"] = function(self, event)
            local toDelete = event.currentTarget:getAttribute("data")

            for i, todo in ipairs(m.todos) do
                if todo.id == toDelete then
                    table.remove(m.todos, i)
                    return
                end
            end
        end
    }
}

Signal.register("collection-update", function(collection, i, element)
    if collection == m.todos then
        v:render()
    end
end)

v:render()
