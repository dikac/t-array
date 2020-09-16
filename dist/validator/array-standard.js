(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./array", "../validatable/string/array"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const array_1 = require("./array");
    const array_2 = require("../validatable/string/array");
    /**
     * create {@see Array} with default message
     */
    function ArrayStandard() {
        return new array_1.default(array_2.default);
    }
    exports.default = ArrayStandard;
});
//# sourceMappingURL=array-standard.js.map