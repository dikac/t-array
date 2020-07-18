(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-iterable/validatable/boolean/or"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const or_1 = require("@dikac/t-iterable/validatable/boolean/or");
    function Or(validatables, defaults = true) {
        let values = new class extends Array {
            constructor() {
                super(...validatables);
                this.defaults = defaults;
            }
            get valid() {
                return or_1.default(this, this.defaults);
            }
            get value() {
                return this;
            }
        };
        return values;
    }
    exports.default = Or;
});
//# sourceMappingURL=or.js.map