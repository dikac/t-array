(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../string/array"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const array_1 = require("../string/array");
    function Array(string, subject = 'type', conversion = value => typeof value) {
        return new Error(array_1.default(false, string, subject, conversion));
    }
    exports.default = Array;
});
//# sourceMappingURL=array.js.map