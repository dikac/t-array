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
    function Map(values, validators, stopInvalid) {
        let object = 
        // @ts-ignore
        [];
        for (let [property, validator] of validators.entries()) {
            const value = values[property];
            object[property] = validator.validate(value);
            if (stopInvalid && !object[property].valid) {
                return object;
            }
        }
        return object;
    }
    exports.default = Map;
});
//# sourceMappingURL=map.js.map