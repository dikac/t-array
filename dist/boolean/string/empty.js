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
    function Empty(valid, value) {
        if (valid) {
            return `array is empty`;
        }
        else {
            return `array must empty`;
        }
    }
    exports.default = Empty;
});
//# sourceMappingURL=empty.js.map