(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./recursive/array", "../validatable/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const array_1 = require("./recursive/array");
    const and_1 = require("../validatable/and");
    class Array {
        constructor(validators) {
            this.validators = validators;
        }
        validate(value) {
            let results = array_1.default(this.validators, value);
            return and_1.default(results);
        }
    }
    exports.default = Array;
});
//# sourceMappingURL=array.js.map