/**
 * Check if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template Value}
 */
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
    function List(list, validation) {
        for (let value of list) {
            if (validation(value)) {
                continue;
            }
            return false;
        }
        return true;
    }
    exports.default = List;
});
//# sourceMappingURL=list.js.map