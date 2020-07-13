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
    function ArrayOf(value, singular) {
        if (!Array.isArray(value)) {
            return false;
        }
        for (let val of value) {
            if (!singular(val)) {
                return false;
            }
        }
        return true;
    }
    exports.default = ArrayOf;
});
//# sourceMappingURL=array-of.js.map