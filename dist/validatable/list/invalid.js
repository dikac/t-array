(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validatable/ensure/validatable", "@dikac/t-validatable/boolean/invalid"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validatable_1 = require("@dikac/t-validatable/ensure/validatable");
    const invalid_1 = require("@dikac/t-validatable/boolean/invalid");
    /**
     * filter all invalid {@link Validatable} while retain its original structure
     */
    function Invalid(list) {
        return list.map((v) => validatable_1.default(v)).filter(invalid_1.default);
    }
    exports.default = Invalid;
});
//# sourceMappingURL=invalid.js.map