(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./empty", "../validatable/string/not-empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const empty_1 = require("./empty");
    const not_empty_1 = require("../validatable/string/not-empty");
    function NotEmptyStandard() {
        return new empty_1.default(not_empty_1.default);
    }
    exports.default = NotEmptyStandard;
});
//# sourceMappingURL=not-empty-standard.js.map