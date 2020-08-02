(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./return/list/standard", "../validatable/map-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.MapClass = void 0;
    const standard_1 = require("./return/list/standard");
    const map_callback_1 = require("../validatable/map-callback");
    function Map(validators, validation, message) {
        return new MapClass(validators, validation, message);
    }
    exports.default = Map;
    class MapClass {
        constructor(validators, validation, message) {
            this.validators = validators;
            this.validation = validation;
            this.message = message;
        }
        validate(value) {
            let validator = new map_callback_1.default(value, this.validators, (value, validators) => standard_1.default(value, validators, true), this.validation, this.message);
            return validator;
        }
    }
    exports.MapClass = MapClass;
});
//# sourceMappingURL=map.js.map