(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./list-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const list_callback_1 = require("./list-callback");
    function ListCallbackFunction(validator, handler, validation, message) {
        return new list_callback_1.default(validator, handler, validation, message);
    }
    exports.default = ListCallbackFunction;
});
//# sourceMappingURL=list-callback-function.js.map