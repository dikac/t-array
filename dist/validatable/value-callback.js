(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/value/value/set-getter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const set_getter_1 = require("@dikac/t-object/value/value/set-getter");
    class ValueCallback {
        constructor(value, validators, map, validation, message) {
            this.value = value;
            this.validators = validators;
            this.messageFactory = message;
            this.validatables = map(value, this.validators);
            this.validatable = validation(this.validatables);
            this.valid = this.validatable.valid;
            this.messages = this.validatables;
        }
        get message() {
            return set_getter_1.default(this, 'message', this.messageFactory(this.validatables));
        }
    }
    exports.default = ValueCallback;
});
//# sourceMappingURL=value-callback.js.map