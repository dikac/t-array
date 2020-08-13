(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-boolean/random"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const random_1 = require("@dikac/t-boolean/random");
    /**
     * pick a random values
     *
     * @param array
     * @param random
     */
    function Random(array, random = random_1.default) {
        let gets = [];
        for (let data of array) {
            if (random()) {
                gets.push(data);
            }
        }
        return gets;
    }
    exports.default = Random;
});
//# sourceMappingURL=random.js.map