import EmptyArgument from "../boolean/empty";
export default class Empty {
    constructor(value, _message) {
        this.value = value;
        this._message = _message;
        this.valid = EmptyArgument(value);
    }
    *[Symbol.iterator]() {
        yield* this.value;
    }
    get message() {
        try {
            return this._message(this);
        }
        catch (e) {
            throw new Error(`error on generating message, ${e}`);
        }
    }
}
//# sourceMappingURL=empty.js.map