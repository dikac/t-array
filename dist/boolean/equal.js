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
    function Equal(array1, array2, compare = equal_1.default) {
        if (array1.length !== array2.length) {
            return false;
        }
        let valids = [];
        PARENT: for (let i in array1) {
            for (let j in array2) {
                if (valids.includes(j)) {
                    continue;
                }
                if (compare(array1[i], array2[j])) {
                    valids.push(j);
                    continue PARENT;
                }
            }
            return false;
        }
        if (array1.length === valids.length) {
            return true;
        }
        return false;
    }
    exports.default = Equal;
});
//# sourceMappingURL=equal.js.map