import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableListCallback from "../validatable/list-callback";
import ValidatableListCallbackInterface from "../validatable/list-callback";
import Message from "@dikac/t-message/message";
import Construct from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
import Replace from "@dikac/t-validatable/boolean/replace";
import BaseInfer from "@dikac/t-validator/base/infer";
import TypeInfer from "@dikac/t-validator/type/infer";
import List from "./list";

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

export default class ValueCallback<
    MessageT = unknown,
    ValidatorT extends Validator = Validator,
    Validatables extends Instance[] = Instance[],
    ValidatableT extends Validatable  = Validatable
> implements List<MessageT, ValidatorT, Validatables, ValidatableT> {

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
    constructor(
        public validator : ValidatorT,
        public map : (value:BaseInfer<ValidatorT>[], validator:ValidatorT)=>Validatables,
        public validation : (result:Validatables)=>ValidatableT,
        public message : (result:Validatables)=>MessageT
    ) {
    }

    validate<Argument extends TypeInfer<ValidatorT>[]>(value: Argument) :
        Replace<ValidatableListCallbackInterface<Argument, ValidatorT, Validatables, MessageT, ValidatableT>, true>

    validate<Argument extends BaseInfer<ValidatorT>[]>(value: Argument) :
        Construct<BaseInfer<ValidatorT>[], Argument, TypeInfer<ValidatorT>[], ValidatableListCallbackInterface<TypeInfer<ValidatorT>[], ValidatorT, Validatables, MessageT, ValidatableT>>

    validate<Argument extends BaseInfer<ValidatorT>[]>(value: Argument) {

        return new ValidatableListCallback(value, this.validator, this.map, this.validation, this.message);
    }
}


