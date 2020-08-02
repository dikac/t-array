(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-message/ensure/message", "@dikac/t-message/message/value"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const message_1 = require("@dikac/t-message/ensure/message");
    const value_1 = require("@dikac/t-message/message/value");
    function Filter(list, filter) {
        return list.map((v) => message_1.default(v)).
            filter((v) => filter(v)).
            map(value_1.default);
    }
    exports.default = Filter;
});
//# sourceMappingURL=filter.js.map