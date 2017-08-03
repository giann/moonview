local global = js.global
local document = global.document

local q = require("moonview.helpers").q
local lustache = require("lustache")
local Class = require("hump.class")
local Signal = require("hump.signal")

-- View
local View = Class {

    init = function(self, options)
        self.template = options and options.template or nil
        self.target   = options and options.target or nil
        self.model    = options and options.model or {}

        self.modelUpdate = options and options.modelUpdate or function() end

        Signal.register("model-update", function(model, k, v)
            if (model == self.model) then
                self:modelUpdate(k, v)
                self:render()
            end
        end)
    end,

    render = function(self)
        local template = self.template and q(self.template) or nil
        template = template and template.textContent or nil

        local target = self.target and q(self.target) or nil

        if target then
            target.innerHTML = lustache:render(template, rawget(self.model, "model"))
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

return {
    View = View,
    Model = Model
}
