(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/array"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const array_1 = require("../../boolean/string/array");
    function Array(object) {
        return array_1.default(object.valid);
    }
    exports.default = Array;
});
//# sourceMappingURL=array.js.map