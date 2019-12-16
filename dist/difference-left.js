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
    function DifferenceLeft(targets, comparisons, compare = (target, comparison) => target === comparison) {
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
    exports.default = DifferenceLeft;
});
//# sourceMappingURL=difference-left.js.map