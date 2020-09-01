(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/string/name", "@dikac/t-string/message/sentence"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const name_1 = require("@dikac/t-object/string/name");
    const sentence_1 = require("@dikac/t-string/message/sentence");
    /**
     * string intended for empty array
     *
     * @param valid
     * @param value
     * @param subject
     */
    function Empty(valid, value, subject = '') {
        const sentence = new sentence_1.default(valid);
        sentence.value = [subject, name_1.default(value)].join(' ');
        sentence.type = 'empty array';
        return sentence.message;
    }
    exports.default = Empty;
});
//# sourceMappingURL=empty.js.map