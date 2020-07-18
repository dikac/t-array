(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/recursive/map", "../validatable/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_1 = require("./validatable/recursive/map");
    const and_1 = require("../validatable/and");
    class Array {
        constructor(validators) {
            this.validators = validators;
        }
        validate(value) {
            let results = map_1.default(this.validators, value);
            return and_1.default(results);
        }
    }
    exports.default = Array;
});
//# sourceMappingURL=array.js.map