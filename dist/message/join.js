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
    function Join(messages, delimiter) {
        let values = new class extends Array {
            constructor() {
                super(...messages);
                this.delimiter = delimiter;
            }
            get message() {
                return this.map(message => message.message).join(this.delimiter);
            }
        };
        return values;
    }
    exports.default = Join;
});
//# sourceMappingURL=join.js.map