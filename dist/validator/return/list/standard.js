(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function Standard(values, validators, stopInvalid) {
        const result = [];
        for (let [property, validator] of validators.entries()) {
            const value = values[property];
            const validatable = validator.validate(value);
            result[property] = validatable;
            if (!validatable.valid && stopInvalid) {
                return result;
            }
        }
        return result;
    }
    exports.default = Standard;
});
//# sourceMappingURL=standard.js.map