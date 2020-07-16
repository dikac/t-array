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
     * {@param valid} type is valid or not
     * {@param index} object property
     * {@param type} expected type
     */
    function Value(valid, index, type) {
        if (valid) {
            return `index "${index}" value is "${type}"`;
        }
        else {
            return `index "${index}" value is not "${type}"`;
        }
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map