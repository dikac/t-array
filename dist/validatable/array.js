(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-iterable/validatable/boolean/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const and_1 = require("@dikac/t-iterable/validatable/boolean/and");
    class Array extends globalThis.Array {
        constructor(validatables, validation = and_1.default, defaults, value) {
            super(...validatables);
            this.validation = validation;
            this.defaults = defaults;
            this.value = value;
            this[Symbol.species] = globalThis.Array;
        }
        get valid() {
            return this.validation(this, this.defaults);
        }
    }
    exports.default = Array;
});
//# sourceMappingURL=array.js.map