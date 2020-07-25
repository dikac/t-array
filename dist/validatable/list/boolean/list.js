(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../../../list/boolean/list", "@dikac/t-validatable/boolean/validatable"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const list_1 = require("../../../list/boolean/list");
    const validatable_1 = require("@dikac/t-validatable/boolean/validatable");
    /**
     * Check if {@param list} is array of {@link Validatable}
     */
    function List(list) {
        return list_1.default(list, validatable_1.default);
    }
    exports.default = List;
});
//# sourceMappingURL=list.js.map