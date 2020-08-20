(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./map-callback"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const map_callback_1 = require("./map-callback");
    /**
     * function factory for {@link MapCallback}
     *
     * type return has better handling by typescript
     */
    function MapCallbackFunction(validators, map, validation, message) {
        return new map_callback_1.default(validators, map, validation, message);
    }
    exports.default = MapCallbackFunction;
});
//# sourceMappingURL=map-callback-function.js.map