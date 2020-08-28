(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../number", "@dikac/t-boolean/equal"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const number_1 = require("../number");
    const equal_1 = require("@dikac/t-boolean/equal");
    function Has(array, compare, validator = equal_1.default, fromIndex = 0) {
        return number_1.default(array, compare, validator, fromIndex) !== null;
    }
    exports.default = Has;
});
//# sourceMappingURL=has.js.map