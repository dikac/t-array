(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../validatable/map-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_callback_1 = require("../validatable/map-callback");
    /**
     * implementation of {@link Interface}
     */
    class MapCallback {
        /**
         * @param validators
         * list of {@link Validator}
         *
         * @param map
         * process list of value and {@param validators} to list of {@link Instance}
         *
         * @param validation
         * process result of {@param map} to single {@link Validatable}
         *
         * @param message
         * process result of {@param map} to single {@link Message}
         */
        constructor(validators, map, validation, message) {
            this.validators = validators;
            this.map = map;
            this.validation = validation;
            this.message = message;
        }
        validate(value) {
            return new map_callback_1.default(value, this.validators, this.map, this.validation, this.message);
        }
    }
    exports.default = MapCallback;
});
//# sourceMappingURL=map-callback.js.map