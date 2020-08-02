(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-validatable/ensure/validatable", "@dikac/t-validatable/boolean/value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const validatable_1 = require("@dikac/t-validatable/ensure/validatable");
    const value_1 = require("@dikac/t-validatable/boolean/value");
    /**
     * filter all valid {@link Validatable}
     */
    function Valid(list) {
        return list.map((v) => validatable_1.default(v)).filter(value_1.default);
    }
    exports.default = Valid;
});
//# sourceMappingURL=valid.js.map