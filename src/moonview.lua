local global = js.global
local document = global.document

local helpers  = require("moonview.helpers")
local q        = helpers.q
local qall     = helpers.qall
local etlua    = require("etlua")
local Signal   = require("hump.signal")

local View = function(options)
    local view = {
        template = options and options.template or nil,
        compiled = nil,
        target   = options and options.target or nil,
        model    = options and options.model or {},
        events   = options and options.events or {},

        setTemplate = function(self, template)
            if self.template ~= template then
                self.template = template
                self.compiled = nil
            end
        end,

        render = function(self)
            local template = self.template and q(self.template) or nil
            template = template and template.textContent or nil

            local target = self.target and q(self.target) or nil

            if target and template then
                if not self.compiled then
                    self.compiled = etlua.compile(template)
                end

                self:beforeRender()
                target.innerHTML = self.compiled(rawget(self.model, "model"))
                self:afterRender()

                self:registerEvents()
            end
        end,

        registerEvents = function(self)
            for eventSelector, callback in pairs(self.events) do
                local eventName, selector = eventSelector:match("(%w+)(.+)")
                local elements = qall(selector)

                for i = 1, #elements do
                    elements[i]:addEventListener(eventName, function(context, event)
                        return callback(self, context, event)
                    end)
                end
            end
        end,

        beforeRender = options and options.beforeRender or function() end,

        afterRender = options and options.afterRender or function() end
    }

    Signal.register("model-update", function(model, k, v)
        if (model == view.model) then
            view:render()
        end
    end)

    return view
end

local Model = function(options)
    return setmetatable({
        model = options
    }, {
        __newindex = function(self, k, v)
            rawget(self, "model")[k] = v
            Signal.emit("model-update", self, k, v)
        end,

        __index = function(self, k)
            return rawget(self, "model")[k]
        end,

        __len = function(self)
            return #rawget(self, "model")
        end
    })
end

local Collection = function(collection)
    return setmetatable({
        collection = collection    
    }, {
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

            rawget(self, "collection")[k] = v

            for _, signal in ipairs(signals) do
                Signal.emit(signal, self, k, v)
            end
        end,

        __index = function(self, k)
            return rawget(self, "collection")[k]
        end,

        __len = function(self)
            return #rawget(self, "collection")
        end
    })
end

return {
    View = View,
    Model = Model,
    Collection = Collection
}
