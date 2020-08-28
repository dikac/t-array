import Validator from "@dikac/t-validator/validator";
import SimpleValidator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableValueInterface from "../validatable/value";
import Message from "@dikac/t-message/message";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validators from "./validators/validators";
import Validation from "@dikac/t-validatable/validation/validation";
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
export default interface Value<BaseT, ValueT extends BaseT, MessageT, ValidatorsT extends Validator<BaseT, ValueT>[], Validatables extends Instance[], ValidatableT extends Validatable> extends SimpleValidator<BaseT, ValueT, ValidatableValueInterface<BaseT, ValidatorsT, Validatables, MessageT, ValidatableT>>, Message<(result: Validatables) => MessageT>, Validators<ValidatorsT>, Validation<(result: Validatables) => ValidatableT> {
}
