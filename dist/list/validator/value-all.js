(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../validatable/list/value", "./value-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("../../validatable/list/value");
    const value_callback_1 = require("./value-callback");
    class ValueAll {
        constructor(validators, validation) {
            this.validators = validators;
            this.validation = validation;
        }
        validate(value) {
            let validator = new value_callback_1.default(this.validators, (value, validators) => value_1.default(value, validators, false), this.validation);
            return validator.validate(value);
        }
    }
    exports.default = ValueAll;
});
//# sourceMappingURL=value-all.js.map