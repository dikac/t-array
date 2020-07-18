(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../or"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const or_1 = require("../or");
    function Or(messages) {
        return or_1.default(messages).message;
    }
    exports.default = Or;
});
//# sourceMappingURL=or.js.map