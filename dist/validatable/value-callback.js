import MemoizeGetter from "@dikac/t-object/value/value/set-getter";
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
        return MemoizeGetter(this, 'message', this.messageFactory(this.validatables));
    }
}
//# sourceMappingURL=value-callback.js.map