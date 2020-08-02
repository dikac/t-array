(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/array"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const array_1 = require("../validatable/array");
    class Array_ {
        constructor(message) {
            this.message = message;
        }
        validate(value) {
            return array_1.default(value, this.message);
        }
    }
    exports.default = Array_;
});
//# sourceMappingURL=array.js.map