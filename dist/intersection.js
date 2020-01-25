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
     * return data which exists in all array
     *
     * @param compare
     * @param arrays
     * @constructor
     */
    function Intersection(compare = (target, comparison) => target === comparison, ...arrays) {
        switch (arrays.length) {
            case 0: return [];
            case 1: return arrays.shift();
        }
        let intersection = arrays.shift();
        for (const array of arrays) {
            intersection = intersection.filter((value1) => {
                for (const value2 of array) {
                    if (compare(value1, value2)) {
                        return true;
                    }
                }
                return false;
            });
        }
        return intersection;
    }
    exports.default = Intersection;
});
//# sourceMappingURL=intersection.js.map