(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./join"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const join_1 = require("./join");
    function And(messages) {
        return join_1.default(messages, ' or ');
    }
    exports.default = And;
});
//# sourceMappingURL=or.js.map