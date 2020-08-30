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
    /**
     * pick a unique value from {@param values}
     *
     * @param values
     *
     * @param compare
     * to compare value equality
     *
     */
    function Unique(values, compare = equal_1.default) {
        let results = [];
        PARENT: for (let index1 in values) {
            for (let result of results) {
                if (compare(values[index1], result)) {
                    continue PARENT;
                }
            }
            results.push(values[index1]);
        }
        return results;
    }
    exports.default = Unique;
});
//# sourceMappingURL=unique.js.map