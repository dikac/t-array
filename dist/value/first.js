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
     * get the first non 'undefined' value
     *
     * @param values
     */
    function First(values) {
        let first = values[0];
        if (first === undefined) {
            for (const value of values) {
                if (value !== undefined) {
                    return value;
                }
            }
        }
        return first;
    }
    exports.default = First;
});
//# sourceMappingURL=first.js.map