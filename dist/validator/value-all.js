(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/list/value", "./value-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("./validatable/list/value");
    const value_callback_1 = require("./value-callback");
    /**
     * more specific implementation of {@link ValueCallback}
     *
     * Validate value with all list of {@link Validator}
     *
     * @param validators
     * list of {@link Validator} to be used against value
     *
     * @param validation
     * combined all result from {@link Validator} list into {@link Validatable}
     *
     * @param message
     * combined all result from {@link Validator} list into {@link Message} value
     */
    function ValueAll(validators, validation, message) {
        return new value_callback_1.default(validators, value_1.default, validation, message);
    }
    exports.default = ValueAll;
});
//# sourceMappingURL=value-all.js.map