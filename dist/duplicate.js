(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * pick a duplicate value from {@param values}
     *
     * @param values
     *
     * @param compare
     * to compare value equality
     *
     */
    function Duplicate(values, compare = (value1, value2) => value1 === value2) {
        let duplicates = [];
        for (let [index1, value1] of values.entries()) {
            for (let [index2, value2] of values.entries()) {
                if (index1 === index2) {
                    continue;
                }
                if (compare(value1, value2)) {
                    duplicates.push(value1);
                    break;
                }
            }
        }
        return duplicates;
    }
    exports.default = Duplicate;
});
//# sourceMappingURL=duplicate.js.map