/**
 *  validate array length
 */
export default class Length {
    constructor(validator) {
        this.validator = validator;
    }
    validate(value) {
        let validatable = this.validator.validate(value.length);
        return {
            get validatable() {
                return validatable;
            },
            get value() {
                return value;
            },
            get message() {
                return validatable.message;
            },
            get valid() {
                return validatable.valid;
            }
        };
    }
}
//# sourceMappingURL=length.js.map