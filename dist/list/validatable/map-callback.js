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
    class MapCallback {
        constructor(value, validators, handler, validation) {
            this.value = value;
            this.validators = validators;
            this.handler = handler;
            this.validation = validation;
            this.validatables = this.handler(value, this.validators);
            this.validatable = validation(this.validatables);
            this.valid = this.validatable.valid;
        }
    }
    exports.default = MapCallback;
});
//# sourceMappingURL=map-callback.js.map