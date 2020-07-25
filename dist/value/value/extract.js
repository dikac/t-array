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
    /**
     * get and remove selected value
     *
     * @param array
     * @param index
     * if negative will start at the end
     *
     * @constructor
     */
    function Extract(array, index) {
        return array.splice(index, 1)[0];
    }
    exports.default = Extract;
});
//# sourceMappingURL=extract.js.map