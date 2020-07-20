(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../validatable/list/value", "../../validatable/combine", "./default", "../../validatable/list/boolean/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("../../validatable/list/value");
    const combine_1 = require("../../validatable/combine");
    //import Recursive from "../recursive";
    const default_1 = require("./default");
    const and_1 = require("../../validatable/list/boolean/and");
    class Value extends default_1.default {
        validate(value) {
            let results = value_1.default(this.validators, value, false);
            return new combine_1.default(results, and_1.default, this.defaults, value);
        }
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map