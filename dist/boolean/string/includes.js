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
    function Includes(valid, value, trues, falses) {
        if (valid) {
            return `value is exists in entries`;
        }
        else {
            return `value is not exists in entries`;
        }
    }
    exports.default = Includes;
});
//# sourceMappingURL=includes.js.map