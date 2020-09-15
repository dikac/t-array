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
     * get the last non 'undefined' value
     *
     * @param value
     */
    function Last(value) {
        let last = value[value.length - 1];
        if (last === undefined) {
            let clone = value.slice(0);
            do {
                last = clone.pop();
            } while (last === undefined && clone.length);
        }
        return last;
    }
    exports.default = Last;
});
//# sourceMappingURL=last.js.map