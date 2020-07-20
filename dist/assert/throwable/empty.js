(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../boolean/string/empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const empty_1 = require("../../boolean/string/empty");
    function Empty(empty, string) {
        return new Error(empty_1.default(false, empty, string));
    }
    exports.default = Empty;
});
//# sourceMappingURL=empty.js.map