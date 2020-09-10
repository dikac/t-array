(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/array", "@dikac/t-function/assert/callback", "./throwable/array"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const array_1 = require("../boolean/array");
    const callback_1 = require("@dikac/t-function/assert/callback");
    const array_2 = require("./throwable/array");
    function Array(value, error = array_2.default) {
        callback_1.default(value, array_1.default, error);
    }
    exports.default = Array;
});
//# sourceMappingURL=array.js.map