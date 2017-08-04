local global = js.global
local document = global.document

local helpers  = require("moonview.helpers")
local q        = helpers.q
local qall     = helpers.qall
local lustache = require("lustache")
local Class    = require("hump.class")
local Signal   = require("hump.signal")

-- View
local View = Class {

    init = function(self, options)
        self.template = options and options.template or nil
        self.target   = options and options.target or nil
        self.model    = options and options.model or {}
        self.events   = options and options.events or {}

        Signal.register("model-update", function(model, k, v)
            if (model == self.model) then
                self:render()
            end
        end)
    end,

    render = function(self)
        local template = self.template and q(self.template) or nil
        template = template and template.textContent or nil

        local target = self.target and q(self.target) or nil

        if target and template then
            target.innerHTML = lustache:render(template, rawget(self.model, "model"))

            self:registerEvents()
        end
    end,

    registerEvents = function(self)
        for eventSelector, callback in pairs(self.events) do
            local event, selector = eventSelector:match("(%w+)(.+)")
            local elements = qall(selector)

            for i = 1, #elements do
                elements[i]:addEventListener(event, function(event)
                    return callback(self, event)
                end)
            end
        end
    end

}

-- Model
local Model = Class {
    
    init = function(self, options)
        rawset(self, "model", options)
    end,

    __newindex = function(self, k, v)
        rawset(self.model, k, v)
        Signal.emit("model-update", self, k, v)
    end,

    __index = function(self, k)
        return rawget(self.model, k)
    end,

    __len = function(self)
        return rawlen(self.model)
    end
}

local Collection = Class {
    
    init = function(self, collection)
        rawset(self, "collection", collection)
    end,

    __newindex = function(self, k, v)
        local exist = rawget(self.collection, k) ~= nil
        local signals = { "collection-update" }

        if exist then
            if v == nil then
                table.insert(signals, "collection-remove")
            end
        else
            if v ~= nil then
                table.insert(signals, "collection-add")
            end
        end

        rawset(self.collection, k, v)

        for _, signal in ipairs(signals) do
            Signal.emit(signal, self, k, v)
        end
    end,

    __index = function(self, k)
        return rawget(self.collection, k)
    end,

    __len = function(self)
        return rawlen(self.collection)
    end
}

return {
    View = View,
    Model = Model,
    Collection = Collection
}
