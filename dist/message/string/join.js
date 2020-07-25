(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../join"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const join_1 = require("../join");
    function Join(messages, delimiter) {
        return new join_1.default(messages, delimiter).message;
    }
    exports.default = Join;
});
//# sourceMappingURL=join.js.map