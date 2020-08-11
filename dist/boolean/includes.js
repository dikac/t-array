(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./string/includes"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const includes_1 = require("./string/includes");
    function Includes(value, trues, falses, defaults = (value, trues, falses) => { throw new Error(includes_1.default(false, value, trues, falses)); }, compare = (value1, value2) => value1 === value2) {
        for (const val of trues) {
            if (compare(value, val)) {
                return true;
            }
        }
        for (const val of falses) {
            if (compare(value, val)) {
                return false;
            }
        }
        return defaults(value, trues, falses);
    }
    exports.default = Includes;
});
//# sourceMappingURL=includes.js.map