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
    function Map(validators, validation, message) {
        return new map_callback_1.default(validators, map_partial_1.default, validation, message);
    }
    exports.default = Map;
});
//# sourceMappingURL=map.js.map