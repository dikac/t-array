(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "../reset"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const reset_1 = require("../reset");
    class Join {
        constructor(messages, delimiter) {
            this.messages = messages;
            this.delimiter = delimiter;
        }
        get message() {
            let messages = reset_1.default(this.messages);
            return messages.map(message => message.message).join(this.delimiter);
        }
    }
    exports.default = Join;
});
//# sourceMappingURL=join.js.map