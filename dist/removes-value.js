(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./value/value/extract", "./number"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const extract_1 = require("./value/value/extract");
    const number_1 = require("./number");
    function RemovesValue(array, value, validator = (arrayValue, valueArgument) => arrayValue === valueArgument, start = 0, end = Infinity, limit = Infinity) {
        let removed = [];
        while (limit > 0) {
            let index = number_1.default(array, value, validator, start, end);
            if (index !== null) {
                let value = extract_1.default(array, index);
                if (value === undefined) {
                    throw new Error('TODO');
                }
                removed.push(value);
                limit--;
            }
            else {
                break;
            }
        }
        return removed;
    }
    exports.default = RemovesValue;
});
//# sourceMappingURL=removes-value.js.map