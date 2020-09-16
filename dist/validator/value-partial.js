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
    /**
     * more specific implementation of {@link ValueCallback}
     *
     * Validate value with list of {@link Validator}
     * stop on encounter that match {@param stop} result from {@link Validator}
     *
     * @param validators
     * list of {@link Validator} to be used against value
     *
     * @param validation
     * combined partial result from {@link Validator} list into {@link Validatable}
     *
     * @param message
     * combined partial result from {@link Validator} list into {@link Message} value
     *
     * @param stop
     * stop validation operation condition
     */
    function ValuePartial(validators, validation, message, stop = false) {
        return new value_callback_1.default(validators, (value, validators) => value_partial_1.default(value, validators, stop), validation, message);
    }
    exports.default = ValuePartial;
});
//# sourceMappingURL=value-partial.js.map