(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../list/filter", "@dikac/t-validatable/boolean/validatable"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const filter_1 = require("../../list/filter");
    const validatable_1 = require("@dikac/t-validatable/boolean/validatable");
    /**
     * filter all invalid {@link Validatable} while retain its original structure
     */
    function Invalid(list) {
        return filter_1.default(list, validatable_1.default, (v) => !v.valid);
    }
    exports.default = Invalid;
});
//# sourceMappingURL=invalid.js.map