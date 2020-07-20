(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-iterable/validatable/boolean/or", "./combine"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const or_1 = require("@dikac/t-iterable/validatable/boolean/or");
    const combine_1 = require("./combine");
    function Or(validatables, defaults = true) {
        let array = new combine_1.default(validatables, or_1.default, defaults, null);
        array.value = array;
        return array;
    }
    exports.default = Or;
});
//# sourceMappingURL=or.js.map