(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-iterable/validatable/boolean/and", "./array"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const and_1 = require("@dikac/t-iterable/validatable/boolean/and");
    const array_1 = require("./array");
    function And(validatables, defaults = true) {
        let array = new array_1.default(validatables, and_1.default, defaults, null);
        array.value = array;
        return array;
    }
    exports.default = And;
});
//# sourceMappingURL=and.js.map