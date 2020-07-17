(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validator/boolean/validator", "./assert/throwable/value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validator_1 = require("@dikac/t-validator/boolean/validator");
    const value_1 = require("./assert/throwable/value");
    function Value(validators, value) {
        let array = 
        // @ts-ignore
        [];
        for (let [property, validator] of validators.entries()) {
            if (validator_1.default(validator)) {
                array[property] = validator.validate(value);
                continue;
            }
            if (globalThis.Array.isArray(validator)) {
                // @ts-ignore
                array[property] =
                    Value(validator, value);
            }
            else {
                throw value_1.default(property);
            }
        }
        return array;
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map