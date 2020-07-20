(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../../boolean/string/value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("../../../../boolean/string/value");
    function Value(valid, index) {
        return value_1.default(valid, index, 'Validator or array of Validator');
    }
    exports.default = Value;
});
//# sourceMappingURL=value.js.map