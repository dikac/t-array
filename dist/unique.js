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
    function Unique(values, compare = (value1, value2) => value1 === value2) {
        let results = [];
        let added = [];
        PARENT: for (let index1 in values) {
            //if(added.includes(index1)) {
            //continue;
            // }
            for (let result of results) {
                if (compare(values[index1], result)) {
                    continue PARENT;
                }
            }
            //added.push(index1);
            results.push(values[index1]);
        }
        return results;
    }
    exports.default = Unique;
});
//# sourceMappingURL=unique.js.map