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
    // import Recursive from "../recursive";
    class Default {
        constructor(validators, defaults = true) {
            this.validators = validators;
            this.defaults = defaults;
        }
    }
    exports.default = Default;
});
//# sourceMappingURL=default.js.map