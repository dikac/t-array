(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-string/message/sentence"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const sentence_1 = require("@dikac/t-string/message/sentence");
    function Includes(valid, subject = '') {
        const sentence = new sentence_1.default(valid);
        sentence.value = subject;
        sentence.expectation = {
            valid: 'is exists in',
            invalid: 'is not exists in',
        };
        sentence.type = 'array';
        return sentence.message;
    }
    exports.default = Includes;
});
//# sourceMappingURL=includes.js.map