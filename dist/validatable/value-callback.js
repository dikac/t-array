var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";
export default class ValueCallback {
    constructor(value, validators, map, validation, message) {
        this.value = value;
        this.validators = validators;
        this.messageFactory = message;
        this.validatables = map(value, this.validators);
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
        this.messages = this.validatables;
    }
    get message() {
        return this.messageFactory(this.validatables);
    }
}
__decorate([
    MemoizeAccessor()
], ValueCallback.prototype, "message", null);
//# sourceMappingURL=value-callback.js.map