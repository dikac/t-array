(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-boolean/equal"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const equal_1 = require("@dikac/t-boolean/equal");
    /**
     * get index of first match values
     *
     * @param array
     * @param value
     * @param validator (value : Value, argument : Value) => boolean
     * value : value from array
     * argument : value from argument
     *
     * @param start
     * start of index, 0 mean from beginning
     *
     * @param end
     * end of index, Infinity mean no ending
     *
     * @constructor
     */
    function Index(array, value, validator = equal_1.default, start = 0, end = Infinity) {
        let direct = array.indexOf(value, start);
        if (direct !== -1) {
            return direct;
        }
        for (let i = start; array[i] !== undefined && i <= end; i++) {
            if (validator(array[i], value)) {
                return i;
            }
        }
        return null;
    }
    exports.default = Index;
});
//# sourceMappingURL=index.js.map