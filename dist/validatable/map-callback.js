var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "@dikac/t-object/value/set-getter"], factory);
    }
})(function (require, exports) {
    "use strict";
    var _message, _value;
    Object.defineProperty(exports, "__esModule", { value: true });
    const set_getter_1 = require("@dikac/t-object/value/set-getter");
    class MapCallback {
        constructor(value, validators, map, validation, message) {
            this.validators = validators;
            this.map = map;
            this.validation = validation;
            _message.set(this, void 0);
            _value.set(this, void 0);
            __classPrivateFieldSet(this, _value, value);
            __classPrivateFieldSet(this, _message, message);
        }
        get value() {
            return set_getter_1.default(this, 'value', __classPrivateFieldGet(this, _value).slice(0, this.validators.length));
        }
        get valid() {
            return this.validatable.valid;
        }
        get validatable() {
            return set_getter_1.default(this, 'validatable', this.validation(this.validatables));
        }
        get messages() {
            return this.validatables;
        }
        get validatables() {
            return set_getter_1.default(this, 'validatables', this.map(this.value, this.validators));
        }
        get message() {
            return set_getter_1.default(this, 'message', __classPrivateFieldGet(this, _message).call(this, this.validatables));
        }
    }
    exports.default = MapCallback;
    _message = new WeakMap(), _value = new WeakMap();
});
//# sourceMappingURL=map-callback.js.map