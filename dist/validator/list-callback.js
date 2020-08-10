(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/list-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const list_callback_1 = require("../validatable/list-callback");
    class ValueCallback {
        constructor(validator, handler, validation, message) {
            this.validator = validator;
            this.handler = handler;
            this.validation = validation;
            this.message = message;
        }
        validate(value) {
            return new list_callback_1.default(value, this.validator, this.handler, this.validation, this.message);
        }
    }
    exports.default = ValueCallback;
});
//# sourceMappingURL=list-callback.js.map