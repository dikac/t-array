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
    exports.MapAllClass = void 0;
    const standard_1 = require("./return/list/standard");
    const map_callback_1 = require("../validatable/map-callback");
    function MapAll(validators, validation, message) {
        return new MapAllClass(validators, validation, message);
    }
    exports.default = MapAll;
    class MapAllClass {
        constructor(validators, validation, message) {
            this.validators = validators;
            this.validation = validation;
            this.message = message;
        }
        validate(value) {
            let validator = new map_callback_1.default(value, this.validators, (value, validators) => standard_1.default(value, validators, false), this.validation, this.message);
            return validator;
        }
    }
    exports.MapAllClass = MapAllClass;
});
//# sourceMappingURL=map-all.js.map