(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../validatable/recursive/map", "../../validatable/array", "./default", "../../validatable/recursive/boolean/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_1 = require("../../validatable/recursive/map");
    const array_1 = require("../../validatable/array");
    const default_1 = require("./default");
    const and_1 = require("../../validatable/recursive/boolean/and");
    class RecursivePartial extends default_1.default {
        validate(value) {
            let results = map_1.default(this.validators, value, true);
            return new array_1.default(results, and_1.default, this.defaults, value);
        }
    }
    exports.default = RecursivePartial;
});
//# sourceMappingURL=recursive-partial.js.map