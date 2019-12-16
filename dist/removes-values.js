(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./removes-value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const removes_value_1 = require("./removes-value");
    function RemovesValues(array, values, validator = (arrayValue, valueArgument) => arrayValue === valueArgument, start = 0, end = Infinity, limit = Infinity) {
        let removed = [];
        for (let value of values) {
            let _removed = removes_value_1.default(array, value, validator, start, end, limit);
            limit = limit - _removed.length;
            removed.push(..._removed);
        }
        return removed;
    }
    exports.default = RemovesValues;
});
//# sourceMappingURL=removes-values.js.map