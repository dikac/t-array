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
var _message, _value;
import MemoizeGetter from "@dikac/t-object/value/value/set-getter";
export default class MapCallback {
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
        return MemoizeGetter(this, 'value', __classPrivateFieldGet(this, _value).slice(0, this.validators.length));
    }
    get valid() {
        return this.validatable.valid;
    }
    get validatable() {
        return MemoizeGetter(this, 'validatable', this.validation(this.validatables));
    }
    get messages() {
        return this.validatables;
    }
    get validatables() {
        return MemoizeGetter(this, 'validatables', this.map(this.value, this.validators));
    }
    get message() {
        return MemoizeGetter(this, 'message', __classPrivateFieldGet(this, _message).call(this, this.validatables));
    }
}
_message = new WeakMap(), _value = new WeakMap();
//# sourceMappingURL=map-callback.js.map