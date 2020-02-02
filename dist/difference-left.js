(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./difference"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * return all data from targets that does not exists in comparison
     *
     * @param targets
     * @param comparisons
     * @param compare
     * @constructor
     */
    const difference_1 = require("./difference");
    exports.default = difference_1.default;
});
//# sourceMappingURL=difference-left.js.map