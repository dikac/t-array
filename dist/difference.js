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
     * return all data from targets that does not exists in comparison
     *
     * @param targets
     * @param comparisons
     * @param compare
     * @constructor
     */
    function Difference(targets, comparisons, compare = equal_1.default) {
        let results = [];
        TARGET: for (let target of targets) {
            for (let comparison of comparisons) {
                if (compare(target, comparison)) {
                    continue TARGET;
                }
            }
            results.push(target);
        }
        return results;
    }
    exports.default = Difference;
});
//# sourceMappingURL=difference.js.map