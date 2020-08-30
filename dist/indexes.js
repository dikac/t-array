(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-boolean/equal"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const equal_1 = require("@dikac/t-boolean/equal");
    function Indexes(array, value, validator = equal_1.default, start = 0, end = Infinity) {
        let indexes = [];
        for (let i = start; array[i] !== undefined && i <= end; i++) {
            if (validator(array[i], value)) {
                indexes.push(i);
            }
        }
        return indexes;
    }
    exports.default = Indexes;
});
//# sourceMappingURL=indexes.js.map