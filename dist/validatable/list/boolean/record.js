(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../list/boolean/guards", "@dikac/t-validatable/boolean/validatable"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const guards_1 = require("../../../list/boolean/guards");
    const validatable_1 = require("@dikac/t-validatable/boolean/validatable");
    /**
     * Check if {@param record} is array of {@link Validatable}
     */
    function Record(record) {
        return guards_1.default(record, validatable_1.default);
    }
    exports.default = Record;
});
//# sourceMappingURL=record.js.map