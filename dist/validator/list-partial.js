(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./list-callback", "./validatable/list/list-partial"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const list_callback_1 = require("./list-callback");
    const list_partial_1 = require("./validatable/list/list-partial");
    function ListPartial(validator, validation, message) {
        return new list_callback_1.default(validator, list_partial_1.default, validation, message);
    }
    exports.default = ListPartial;
});
//# sourceMappingURL=list-partial.js.map