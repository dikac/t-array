(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/array", "../assert/throwable/array"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const array_1 = require("../assert/array");
    const array_2 = require("../assert/throwable/array");
    function Array(value, error = array_2.default) {
        array_1.default(value, error);
        return value;
    }
    exports.default = Array;
});
//# sourceMappingURL=array.js.map