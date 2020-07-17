(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../reset"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const reset_1 = require("../reset");
    function Reset(argument) {
        let buffer = reset_1.default(argument);
        for (let [index, value] of argument.entries()) {
            if (Array.isArray(value)) {
                buffer[index] = reset_1.default(argument);
            }
        }
        return buffer;
    }
    exports.default = Reset;
});
//# sourceMappingURL=reset.js.map