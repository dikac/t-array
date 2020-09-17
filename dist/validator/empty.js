import EmptyValidatable from "../validatable/empty";
/**
 *  validate if array is empty
 */
export default class Empty {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return new EmptyValidatable(value, this.message);
    }
}
//# sourceMappingURL=empty.js.map