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
    function Map(values, validators) {
        const result = [];
        for (let [property, validator] of validators.entries()) {
            const value = values[property];
            const validatable = validator.validate(value);
            result[property] = validatable;
            if (!validatable.valid) {
                return result;
            }
        }
        return result;
    }
    exports.default = Map;
});
//# sourceMappingURL=map-partial.js.map