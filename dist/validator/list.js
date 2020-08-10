(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./list-callback", "./validatable/list/list"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const list_callback_1 = require("./list-callback");
    const list_1 = require("./validatable/list/list");
    function List(validator, validation, message) {
        return new list_callback_1.default(validator, list_1.default, validation, message);
    }
    exports.default = List;
});
//# sourceMappingURL=list.js.map