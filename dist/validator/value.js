(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/recursive/value", "../validatable/array", "@dikac/t-iterable/validatable/boolean/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("./validatable/recursive/value");
    const array_1 = require("../validatable/array");
    const and_1 = require("@dikac/t-iterable/validatable/boolean/and");
    class Value {
        constructor(validators, defaults = true) {
            this.validators = validators;
            this.defaults = defaults;
        }
        validate(value) {
            let results = value_1.default(this.validators, value);
            return new array_1.default(results, and_1.default, this.defaults, value);
        }
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map