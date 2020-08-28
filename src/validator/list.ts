import Validator from "@dikac/t-validator/validator";
import SimpleValidator from "@dikac/t-validator/simple";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableListCallbackInterface from "../validatable/list-callback";
import Message from "@dikac/t-message/message";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validation from "@dikac/t-validatable/validation/validation";
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
export default interface List<
    MessageT,
    ValidatorT extends Validator,
    Validatables extends Instance[],
    ValidatableT extends Validatable
> extends
    SimpleValidator<
        BaseInfer<ValidatorT>[],
        TypeInfer<ValidatorT>[],
        ValidatableListCallbackInterface<TypeInfer<ValidatorT>[], ValidatorT, Validatables, MessageT, ValidatableT>
    >,
    ValidatorContainer<ValidatorT>,
    Message<(result:Validatables)=>MessageT>,
    Validation<(result:Validatables)=>ValidatableT> {

};
