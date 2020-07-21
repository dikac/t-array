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
     * Check if {@param record} is {@link Recursive} with {@template Value} value
     *
     * {@param validation} is use to validate for {@template Value}
     */
    function List(record, validation) {
        if (!Array.isArray(record)) {
            return false;
        }
        for (let property in record) {
            // @ts-ignore
            const value = record[property];
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