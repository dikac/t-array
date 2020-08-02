(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./return/list/value", "../validatable/value-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_1 = require("./return/list/value");
    const value_callback_1 = require("../validatable/value-callback");
    class ValueAll {
        constructor(validators, validation, message) {
            this.validators = validators;
            this.validation = validation;
            this.message = message;
        }
        validate(value) {
            let validator = new value_callback_1.default(value, this.validators, (value, validators) => value_1.default(value, validators, false), this.validation, this.message);
            return validator;
        }
    }
    exports.default = ValueAll;
});
//# sourceMappingURL=value-all.js.map