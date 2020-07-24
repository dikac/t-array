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
    /**
     * Check if {@param list} is {@link Recursive} with {@template Value} value
     *
     * {@param validation} is use to validate for {@template Value}
     */
    function List(list, validation) {
        if (!Array.isArray(list)) {
            return false;
        }
        for (let property in list) {
            // @ts-ignore
            const value = list[property];
            if (validation(value)) {
                continue;
            }
            if (Array.isArray(value)) {
                if (List(value, validation)) {
                    continue;
                }
            }
            return false;
        }
        return true;
    }
    exports.default = List;
});
//# sourceMappingURL=list.js.map