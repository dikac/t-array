(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../boolean/empty"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // import Recursive from "./recursive";
    const empty_1 = require("../boolean/empty");
    /**
     * recursively filter {@param record} value, returning new object with all value allowed
     * by {@param filter}
     *
     * {@param validation} is used to distinguish between value to be validated by {@param filter} or tobe called
     * recursively
     *
     * {@param empty} default {false}, keep empty array or remove on sub array
     *
     */
    function Filter(record, validation, filter, empty = false) {
        let result = [];
        for (const property in record) {
            const value = record[property];
            if (validation(value)) {
                if (filter(value)) {
                    // @ts-ignore
                    result[property] = value;
                }
            }
            else if (Array.isArray(value)) {
                const results = Filter(value, validation, filter);
                if (!empty) {
                    if (!empty_1.default(results, true)) {
                        result[property] = results;
                    }
                }
                else {
                    result[property] = results;
                }
            }
        }
        return result;
    }
    exports.default = Filter;
});
//# sourceMappingURL=filter.js.map