(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./validatable/list/map", "./map-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_1 = require("./validatable/list/map");
    const map_callback_1 = require("./map-callback");
    /**
     * more specific implementation of {@link MapCallback}
     *
     * Validate list of value with list of {@link Validator}, according to their indexes
     *
     * @param validators
     * list of {@link Validator} to be used against list of value
     *
     * @param validation
     * process all result from {@link Validator} list into {@link Validatable}
     *
     * @param message
     * process all result from {@link Validator} list into {@link Message} value
     */
    function Map(validators, validation, message) {
        return new map_callback_1.default(validators, map_1.default, validation, message);
    }
    exports.default = Map;
});
//# sourceMappingURL=map.js.map