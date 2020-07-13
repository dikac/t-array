(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function And(booleans, defaults = true) {
        if (!booleans.length) {
            return defaults;
        }
        for (let boolean of booleans) {
            if (!boolean) {
                return false;
            }
        }
        return true;
    }
    exports.default = And;
});
//# sourceMappingURL=and.js.map