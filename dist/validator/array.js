import ArrayValidatable from "../validatable/array";
/**
 *  validate if value is array
 */
export default class Array_ {
    constructor(message) {
        this.message = message;
    }
    validate(value) {
        return ArrayValidatable(value, this.message);
    }
}
//# sourceMappingURL=array.js.map