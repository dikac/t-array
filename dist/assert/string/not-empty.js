(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/string/name", "@dikac/t-string/message/sentences"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const name_1 = require("@dikac/t-object/string/name");
    const sentences_1 = require("@dikac/t-string/message/sentences");
    /**
     * string intended for not empty array message
     *
     * @param valid
     * @param value
     * @param subject
     */
    function NotEmpty(valid, value, subject = '') {
        const sentence = new sentences_1.default(valid);
        sentence.accept = ['is not'];
        sentence.reject = ['is'];
        sentence.subject = [subject, name_1.default(value)];
        sentence.expect = ['empty array'];
        return sentence.message;
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=not-empty.js.map