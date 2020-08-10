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
    class ListCallback {
        constructor(value, validator, map, validation, message) {
            this.value = value;
            this.validator = validator;
            this.map = map;
            this.validation = validation;
            this.validatables = this.map(value, this.validator);
            this.validatable = validation(this.validatables);
            this.valid = this.validatable.valid;
            this.message = message(this.validatables);
            this.messages = this.validatables;
        }
    }
    exports.default = ListCallback;
});
//# sourceMappingURL=list-callback.js.map