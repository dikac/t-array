import ValidatableListCallback from "../validatable/list-callback";
/**
 * Base {@link Validator} for validating list of value with {@link Validator}
 *
 * @template ValueT
 * see {@link Validator}
 *
 * @template MessageT
 * see {@link Validator}
 *
 * @template ValidatorsT
 * to be used against list of value
 *
 * @template Validatables
 * result after processing {@template ValidatorsT} with {@template BaseT} or {@template ValueT}
 *
 * @template ValidatableT
 * final result after processing {@template Result}
 */
export default class ValueCallback {
    /**
     * @param validator
     *
     * @param map
     * process list of value and {@param validator} to list of {@link Instance}
     *
     * @param validation
     * process result of {@param map} to single {@link Validatable}
     *
     * @param message
     * process result of {@param map} to single {@link Message}
     */
    constructor(validator, map, validation, message) {
        this.validator = validator;
        this.map = map;
        this.validation = validation;
        this.message = message;
    }
    validate(value) {
        return new ValidatableListCallback(value, this.validator, this.map, this.validation, this.message);
    }
}
//# sourceMappingURL=list-callback.js.map