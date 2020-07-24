(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../assert/throwable/value-validation"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_validation_1 = require("../assert/throwable/value-validation");
    /**
     * Calls {@param replace} on each property value from {@param object} recursively
     *
     * {@template Replace} type of replace result
     *
     * {@param replace} is only called when {@param validation} result of value is true
     * {@param validation} is used for distinguish value to be used for {@param replace} or to be used for recursion
     */
    function MapCallback(object, validation, replace) {
        let result = [];
        for (const [index, value] of object.entries()) {
            if (validation(value)) {
                result[index] = replace(value);
            }
            else {
                // TODO IMPROVE VALIDATION TO STRING
                throw value_validation_1.default(index, 'valid', validation.toString());
            }
        }
        return result;
    }
    exports.default = MapCallback;
});
//# sourceMappingURL=map-callback.js.map