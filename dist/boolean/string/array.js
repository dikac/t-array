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
    function Array(valid, value, conversion = (v) => typeof v) {
        let string = conversion(value);
        if (valid) {
            return `value "${string}" is array`;
        }
        else {
            return `value "${string}" is not array`;
        }
    }
    exports.default = Array;
});
//# sourceMappingURL=array.js.map