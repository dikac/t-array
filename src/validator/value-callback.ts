import Validator from "@dikac/t-validator/validator";
import SimpleValidator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableValue, {Interface as ValidatableValueInterface} from "../validatable/value-callback";
import Message from "@dikac/t-message/message";
import Construct from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validators from "./validators/validators";
import Validation from "@dikac/t-validatable/validation/validation";
import Replace from "@dikac/t-validatable/boolean/replace";

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
export interface Interface<
    BaseT,
    ValueT extends BaseT,
    MessageT,
    ValidatorsT extends Validator<BaseT, ValueT>[],
    Validatables extends Instance[],
    ValidatableT extends Validatable
> extends
    SimpleValidator<
        BaseT,
        ValueT,
        ValidatableValueInterface<BaseT, ValidatorsT, Validatables, MessageT, ValidatableT>
    >,
    Message<(result:Validatables)=>MessageT>,
    Validators<ValidatorsT>,
    Validation<(result:Validatables)=>ValidatableT> {
    map : (value:BaseT, validators:ValidatorsT)=>Validatables
}

/**
 * implementation of {@link Interface}
 */
export default class ValueCallback<
    BaseT = unknown,
    ValueT extends BaseT = BaseT,
    MessageT = unknown,
    ValidatorsT extends Validator<BaseT, ValueT>[] = Validator<BaseT, ValueT>[],
    Validatables extends Instance[] = Instance[],
    ValidatableT extends Validatable  = Validatable
> implements Interface<BaseT, ValueT, MessageT, ValidatorsT, Validatables, ValidatableT> {

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
    constructor(
        public validators : ValidatorsT,
        public map : (value:BaseT, validators:ValidatorsT)=>Validatables,
        public validation : (result:Validatables)=>ValidatableT,
        public message : (result:Validatables)=>MessageT
    ) {
    }

    validate<Argument extends ValueT>(value: Argument) : Replace<ValidatableValueInterface<Argument, ValidatorsT, Validatables, MessageT, ValidatableT>, true>
    validate<Argument extends BaseT>(value: Argument) : Construct<BaseT, Argument, ValueT, ValidatableValueInterface<Argument, ValidatorsT, Validatables, MessageT, ValidatableT>>
    validate<Argument extends BaseT>(value: Argument) {

        return new ValidatableValue(value, this.validators, this.map, this.validation, this.message) as
            Replace<ValidatableValueInterface<BaseT, ValidatorsT, Validatables, MessageT, ValidatableT>, true> |
            Construct<BaseT, Argument, ValueT, ValidatableValueInterface<BaseT, ValidatorsT, Validatables, MessageT, ValidatableT>>;
    }
}



