(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-iterable/validatable/boolean/and", "./callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const and_1 = require("@dikac/t-iterable/validatable/boolean/and");
    const callback_1 = require("./callback");
    function And(validatables, defaults = true) {
        return new callback_1.default(validatables, (v) => and_1.default(v, defaults));
    }
    exports.default = And;
});
//# sourceMappingURL=and.js.map