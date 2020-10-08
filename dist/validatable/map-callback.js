var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";
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
        return __classPrivateFieldGet(this, _value).slice(0, this.validators.length);
    }
    get valid() {
        return this.validatable.valid;
    }
    get validatable() {
        return this.validation(this.validatables);
    }
    get messages() {
        return this.validatables;
    }
    get validatables() {
        return this.map(this.value, this.validators);
    }
    get message() {
        return __classPrivateFieldGet(this, _message).call(this, this.validatables);
    }
}
_message = new WeakMap(), _value = new WeakMap();
__decorate([
    MemoizeAccessor()
], MapCallback.prototype, "value", null);
__decorate([
    MemoizeAccessor()
], MapCallback.prototype, "validatable", null);
__decorate([
    MemoizeAccessor()
], MapCallback.prototype, "validatables", null);
__decorate([
    MemoizeAccessor()
], MapCallback.prototype, "message", null);
//# sourceMappingURL=map-callback.js.map