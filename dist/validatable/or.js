(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-iterable/validatable/boolean/or", "./callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const or_1 = require("@dikac/t-iterable/validatable/boolean/or");
    const callback_1 = require("./callback");
    function Or(validatables, defaults = true) {
        return new callback_1.default(validatables, (v) => or_1.default(v, defaults));
    }
    exports.default = Or;
});
//# sourceMappingURL=or.js.map