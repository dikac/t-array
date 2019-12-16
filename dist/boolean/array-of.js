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
    function ArrayOf(values, singular) {
        if (!Array.isArray(values)) {
            return false;
        }
        for (let value of values) {
            if (!singular(value)) {
                return false;
            }
        }
        return true;
    }
    exports.default = ArrayOf;
});
//# sourceMappingURL=array-of.js.map