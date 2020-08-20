import Validator from "@dikac/t-validator/validator";
import SimpleValidator from "@dikac/t-validator/simple";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import { Interface as ValidatableListCallbackInterface } from "../validatable/list-callback";
import Message from "@dikac/t-message/message";
import Construct from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validation from "@dikac/t-validatable/validation/validation";
import Replace from "@dikac/t-validatable/boolean/replace";
import BaseInfer from "@dikac/t-validator/base/infer";
import TypeInfer from "@dikac/t-validator/type/infer";
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
export declare type Interface<MessageT, ValidatorT extends Validator, Validatables extends Instance[], ValidatableT extends Validatable> = SimpleValidator<BaseInfer<ValidatorT>[], TypeInfer<ValidatorT>[], ValidatableListCallbackInterface<TypeInfer<ValidatorT>[], ValidatorT, Validatables, MessageT, ValidatableT>> & ValidatorContainer<ValidatorT> & Message<Function<[Validatables], MessageT>> & Validation<Function<[Validatables], ValidatableT>> & {
    map: Function<[BaseInfer<ValidatorT>[], ValidatorT], Validatables>;
};
/**
 * implementation of {@link Interface}
 */
export default class ValueCallback<MessageT = unknown, ValidatorT extends Validator = Validator, Validatables extends Instance[] = Instance[], ValidatableT extends Validatable = Validatable> implements Interface<MessageT, ValidatorT, Validatables, ValidatableT> {
    validator: ValidatorT;
    map: Function<[BaseInfer<ValidatorT>[], ValidatorT], Validatables>;
    validation: Function<[Validatables], ValidatableT>;
    message: Function<[Validatables], MessageT>;
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
    constructor(validator: ValidatorT, map: Function<[BaseInfer<ValidatorT>[], ValidatorT], Validatables>, validation: Function<[Validatables], ValidatableT>, message: Function<[Validatables], MessageT>);
    validate<Argument extends TypeInfer<ValidatorT>[]>(value: Argument): Replace<ValidatableListCallbackInterface<Argument, ValidatorT, Validatables, MessageT, ValidatableT>, true>;
    validate<Argument extends BaseInfer<ValidatorT>[]>(value: Argument): Construct<BaseInfer<ValidatorT>[], Argument, TypeInfer<ValidatorT>[], ValidatableListCallbackInterface<TypeInfer<ValidatorT>[], ValidatorT, Validatables, MessageT, ValidatableT>>;
}
