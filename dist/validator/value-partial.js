(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/list/value-partial", "./value-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_partial_1 = require("./validatable/list/value-partial");
    const value_callback_1 = require("./value-callback");
    function ValuePartial(validators, validation, message) {
        return new value_callback_1.default(validators, value_partial_1.default, validation, message);
    }
    exports.default = ValuePartial;
});
//# sourceMappingURL=value-partial.js.map