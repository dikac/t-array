(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/list/map-partial", "./map-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_partial_1 = require("./validatable/list/map-partial");
    const map_callback_1 = require("./map-callback");
    /**
     * more specific implementation of {@link MapCallback}
     *
     * Validate list of value with list of {@link Validator}, according to their indexes
     * stop on encounter invalid result from {@link Validator}
     *
     * @param validators
     * list of {@link Validator} to be used against list of value
     *
     * @param validation
     * process partial result from {@link Validator} list into {@link Validatable}
     *
     * @param message
     * process partial result from {@link Validator} list into {@link Message} value
     *
     * @param stop
     * stop validation operation condition
     */
    function MapPartial(validators, validation, message, stop = false) {
        return new map_callback_1.default(validators, (value, validators) => map_partial_1.default(value, validators, stop), validation, message);
    }
    exports.default = MapPartial;
});
//# sourceMappingURL=map-partial.js.map