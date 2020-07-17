(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validator/boolean/validator", "./assert/throwable/value", "../../assert/throwable/value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validator_1 = require("@dikac/t-validator/boolean/validator");
    const value_1 = require("./assert/throwable/value");
    const value_2 = require("../../assert/throwable/value");
    function Array(validators, values) {
        let object = 
        // @ts-ignore
        [];
        for (let [property, validator] of validators.entries()) {
            const value = values[property];
            if (validator_1.default(validator)) {
                object[property] = validator.validate(value);
                continue;
            }
            if (globalThis.Array.isArray(validator)) {
                if (globalThis.Array.isArray(value)) {
                    // @ts-ignore
                    object[property] =
                        Array(validator, value);
                }
                else {
                    throw value_2.default(property, 'array');
                }
            }
            else {
                throw value_1.default(property);
            }
        }
        return object;
    }
    exports.default = Array;
});
//# sourceMappingURL=array.js.map