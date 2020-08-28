import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import InferReturn from "@dikac/t-validator/validatable/infer";
import ListCallback from "./list-callback";
import Message from "@dikac/t-message/message";
import ValidateMap from "./validatable/list/list";
import List from "./list";

/**
 * more specific implementation of {@link ListCallback}
 *
 * Validate list of value with {@link Validator}
 *
 * @param validator
 * to be used against list of value
 *
 * @param validation
 * process all result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * process all result from {@link Validator} list into {@link Message} value
 */
export default function ListAll<
    MessageT = unknown,
    ValidatorT extends Validator = Validator,
    ValidatableT extends Validatable  = Validatable
>(
    validator : ValidatorT,
    validation : (result:InferReturn<ValidatorT>[])=>ValidatableT,
    message : (result:InferReturn<ValidatorT>[])=>MessageT

) : List<MessageT, ValidatorT, InferReturn<ValidatorT>[], ValidatableT> {

    return new ListCallback<MessageT, ValidatorT, InferReturn<ValidatorT>[], ValidatableT>(validator, ValidateMap , validation, message);
}

