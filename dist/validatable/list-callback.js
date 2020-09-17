import MemoizeGetter from "@dikac/t-object/value/value/set-getter";
export default class ListCallback {
    constructor(value, validator, map, validation, message) {
        this.value = value;
        this.validator = validator;
        this.messageFactory = message;
        this.validatables = map(value, this.validator);
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
        this.messages = this.validatables;
    }
    get message() {
        return MemoizeGetter(this, 'message', this.messageFactory(this.validatables));
    }
}
//# sourceMappingURL=list-callback.js.map