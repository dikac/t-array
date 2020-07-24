(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../validatable/list/map-standard", "./map-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_standard_1 = require("../../validatable/list/map-standard");
    const map_callback_1 = require("./map-callback");
    class Map {
        constructor(validators, validation) {
            this.validators = validators;
            this.validation = validation;
        }
        validate(value) {
            let validator = new map_callback_1.default(this.validators, (value, validators) => map_standard_1.default(value, validators, true), this.validation);
            return validator.validate(value);
        }
    }
    exports.default = Map;
});
//# sourceMappingURL=map.js.map