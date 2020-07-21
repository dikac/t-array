(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../valid", "../../../boolean/empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const valid_1 = require("../valid");
    const empty_1 = require("../../../boolean/empty");
    function Or(object) {
        let filtered = valid_1.default(object);
        return !empty_1.default(filtered, true);
    }
    exports.default = Or;
});
//# sourceMappingURL=or.js.map