(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./difference-left"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const difference_left_1 = require("./difference-left");
    function DifferenceBoth(array1, array2, compare = (value1, value2) => value1 === value2) {
        let left = difference_left_1.default(array1, array2, compare);
        let right = difference_left_1.default(array2, array1, compare);
        return [...new Set([...left, ...right])];
    }
    exports.default = DifferenceBoth;
});
//# sourceMappingURL=difference-both.js.map