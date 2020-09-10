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
        sentence.subject = subject;
        sentence.accept = 'is exists in';
        sentence.reject = 'is not exists in';
        sentence.expect = 'array';
        return sentence.message;
    }
    exports.default = Includes;
});
//# sourceMappingURL=includes.js.map