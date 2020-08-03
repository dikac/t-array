(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../validatable/list/invalid", "./map"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const invalid_1 = require("../../../validatable/list/invalid");
    const map_1 = require("./map");
    function Invalid(list) {
        return map_1.default(invalid_1.default(list));
    }
    exports.default = Invalid;
});
//# sourceMappingURL=invalid.js.map