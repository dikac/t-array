(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./list/boolean/and"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const and_1 = require("./list/boolean/and");
    class Combine {
        constructor(validatables, validation = and_1.default, defaults, value) {
            this.validatables = validatables;
            this.validation = validation;
            this.defaults = defaults;
            this.value = value;
        }
        get valid() {
            return this.validation(this.validatables, this.defaults);
        }
    }
    exports.default = Combine;
});
//# sourceMappingURL=combine.js.map