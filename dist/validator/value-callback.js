(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/value-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_callback_1 = require("../validatable/value-callback");
    /**
     * Base {@link Validator} for validating value with list of {@link Validator}
     *
     * @template BaseType
     * see {@link Validator}
     *
     * @template ValueType
     * see {@link Validator}
     *
     * @template MessageType
     * see {@link Validator}
     *
     * @template ValidatorsType
     * list of {@link Validator} to be used against {@template BaseType} or {@template ValueType}
     *
     * @template Validatables
     * result after processing {@template ValidatorsType} with {@template BaseType} or {@template ValueType}
     *
     * @template ValidatableType
     * final result after processing {@template Result}
     */
    class ValueCallback {
        /**
         * @param validators
         * list of {@link Validator}
         *
         * @param map
         * process value and {@param validators} to list of {@link Instance}
         *
         * @param validation
         * process result of {@param map} to single {@link Validatable}
         *
         * @param message
         * process result of {@param map} to single {@link Message}
         */
        constructor(validators, map, validation, message) {
            this.validators = validators;
            this.map = map;
            this.validation = validation;
            this.message = message;
        }
        validate(value) {
            return new value_callback_1.default(value, this.validators, this.map, this.validation, this.message);
        }
    }
    exports.default = ValueCallback;
});
//# sourceMappingURL=value-callback.js.map