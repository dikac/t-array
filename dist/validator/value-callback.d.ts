import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableValueInterface from "../validatable/value";
import Construct from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Replace from "@dikac/t-validatable/boolean/replace";
import Value from "./value";
/**
 * Base {@link Validator} for validating value with list of {@link Validator}
 *
 * @template BaseT
 * see {@link Validator}
 *
 * @template ValueT
 * see {@link Validator}
 *
 * @template MessageT
 * see {@link Validator}
 *
 * @template ValidatorsT
 * list of {@link Validator} to be used against {@template BaseT} or {@template ValueT}
 *
 * @template Validatables
 * result after processing {@template ValidatorsT} with {@template BaseT} or {@template ValueT}
 *
 * @template ValidatableT
 * final result after processing {@template Result}
 */
export default class ValueCallback<BaseT = unknown, ValueT extends BaseT = BaseT, MessageT = unknown, ValidatorsT extends Validator<BaseT, ValueT>[] = Validator<BaseT, ValueT>[], Validatables extends Instance[] = Instance[], ValidatableT extends Validatable = Validatable> implements Value<BaseT, ValueT, MessageT, ValidatorsT, Validatables, ValidatableT> {
    validators: ValidatorsT;
    map: (value: BaseT, validators: ValidatorsT) => Validatables;
    validation: (result: Validatables) => ValidatableT;
    message: (result: Validatables) => MessageT;
    /**
     * @param validators
     * list of {@link Validator}
     *
     * @param map
     * process value and {@param validators} to list of {@link Instance}
     *
     * @param validation
     * process result of {@param map} to single {@link Validatable}
     *
     * @param message
     * process result of {@param map} to single {@link Message}
     */
    constructor(validators: ValidatorsT, map: (value: BaseT, validators: ValidatorsT) => Validatables, validation: (result: Validatables) => ValidatableT, message: (result: Validatables) => MessageT);
    validate<Argument extends ValueT>(value: Argument): Replace<ValidatableValueInterface<Argument, ValidatorsT, Validatables, MessageT, ValidatableT>, true>;
    validate<Argument extends BaseT>(value: Argument): Construct<BaseT, Argument, ValueT, ValidatableValueInterface<Argument, ValidatorsT, Validatables, MessageT, ValidatableT>>;
}
