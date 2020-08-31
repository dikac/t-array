(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-message/sentence", "@dikac/t-object/string/name"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentence_1 = require("@dikac/t-message/sentence");
    const name_1 = require("@dikac/t-object/string/name");
    const sentence = new sentence_1.default(false, '', {
        invalid: 'is',
        valid: 'is not',
    }, 'empty array');
    /**
     * string intended for not empty array
     *
     * @param valid
     * @param value
     */
    function NotEmpty(valid, value) {
        sentence.subject = '"' + name_1.default(value) + '"';
        sentence.valid = valid;
        return sentence.message;
    }
    exports.default = NotEmpty;
});
//# sourceMappingURL=not-empty.js.map