(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../number"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const number_1 = require("../number");
    function Has(array, compare, validator = (value1, value2) => value1 === value2, fromIndex = 0) {
        return number_1.default(array, compare, validator, fromIndex) !== null;
    }
    exports.default = Has;
});
//# sourceMappingURL=has.js.map