(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../validatable/list/map", "../../validatable/combine", "./default", "../../validatable/list/boolean/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_1 = require("../../validatable/list/map");
    const combine_1 = require("../../validatable/combine");
    const default_1 = require("./default");
    const and_1 = require("../../validatable/list/boolean/and");
    class List extends default_1.default {
        validate(value) {
            let results = map_1.default(this.validators, value, false);
            return new combine_1.default(results, and_1.default, this.defaults, value);
        }
    }
    exports.default = List;
});
//# sourceMappingURL=list.js.map