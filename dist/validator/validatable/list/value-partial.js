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
    function ValuePartial(value, validators) {
        const result = [];
        for (const [property, validator] of validators.entries()) {
            const validatable = validator.validate(value);
            result[property] = validatable;
            if (!validatable.valid) {
                return result;
            }
        }
        return result;
    }
    exports.default = ValuePartial;
});
//# sourceMappingURL=value-partial.js.map