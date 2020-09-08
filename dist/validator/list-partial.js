(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./list-callback", "./validatable/list/list-partial"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const list_callback_1 = require("./list-callback");
    const list_partial_1 = require("./validatable/list/list-partial");
    /**
     * more specific implementation of {@link ListCallback}
     *
     * Validate list of value with {@link Validator}
     * stop on encounter invalid result from {@link Validator}
     *
     * @param validator
     * to be used against list of value
     *
     * @param validation
     * process all result from {@link Validator} list into {@link Validatable}
     *
     * @param message
     * process all result from {@link Validator} list into {@link Message} value
     *
     * @param stop
     * stop validation operation condition
     */
    function ListPartial(validator, validation, message, stop = false) {
        return new list_callback_1.default(validator, (value, validators) => list_partial_1.default(value, validators, stop), validation, message);
    }
    exports.default = ListPartial;
});
//# sourceMappingURL=list-partial.js.map