(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../assert/throwable/value-validation"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const value_validation_1 = require("../../assert/throwable/value-validation");
    class Pair {
        constructor(record, validation) {
            this.record = record;
            this.validation = validation;
            this.keys = [];
        }
        *[Symbol.iterator]() {
            for (const [property, value] of this.record.entries()) {
                const properties = [...this.keys, property];
                if (this.validation(value)) {
                    yield [properties, value];
                }
                else if (Array.isArray(value)) {
                    let recursive = new Pair(value, this.validation);
                    recursive.keys.push(...properties);
                    yield* recursive;
                }
                else {
                    // TODO IMPROVE VALIDATION TO STRING
                    // @ts-ignore
                    throw value_validation_1.default(properties.join('.'), 'valid', (this.validation).toString());
                }
            }
        }
    }
    exports.default = Pair;
});
//# sourceMappingURL=pair.js.map