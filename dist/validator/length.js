(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     *  validate array length
     */
    class Length {
        constructor(validator) {
            this.validator = validator;
        }
        validate(value) {
            let validatable = this.validator.validate(value.length);
            return {
                get validatable() {
                    return validatable;
                },
                get value() {
                    return value;
                },
                get message() {
                    return validatable.message;
                },
                get valid() {
                    return validatable.valid;
                }
            };
        }
    }
    exports.default = Length;
});
//# sourceMappingURL=length.js.map