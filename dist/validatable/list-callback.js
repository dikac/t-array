(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/value/set-getter"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const set_getter_1 = require("@dikac/t-object/value/set-getter");
    class ListCallback {
        constructor(value, validator, map, validation, message) {
            this.value = value;
            this.validator = validator;
            this.messageFactory = message;
            this.validatables = map(value, this.validator);
            this.validatable = validation(this.validatables);
            this.valid = this.validatable.valid;
            this.messages = this.validatables;
        }
        get message() {
            return set_getter_1.default(this, 'message', this.messageFactory(this.validatables));
        }
    }
    exports.default = ListCallback;
});
//# sourceMappingURL=list-callback.js.map