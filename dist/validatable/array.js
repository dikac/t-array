(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-value/message/callback", "../boolean/array"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const callback_1 = require("@dikac/t-value/message/callback");
    const array_1 = require("../boolean/array");
    function Array(value, message) {
        return callback_1.default(value, array_1.default, message);
    }
    exports.default = Array;
});
//# sourceMappingURL=array.js.map