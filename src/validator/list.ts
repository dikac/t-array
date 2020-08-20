import Validator from "@dikac/t-validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import InferReturn from "@dikac/t-validator/validatable/infer";
import ListCallback, {Interface as ListCallbackInterface} from "./list-callback";
import Message from "@dikac/t-message/message";
import ValidateMap from "./validatable/list/list";

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
export default function List<
    MessageT = unknown,
    ValidatorT extends Validator = Validator,
    ValidatableT extends Validatable  = Validatable
>(
    validator : ValidatorT,
    validation : Function<[InferReturn<ValidatorT>[]], ValidatableT>,
    message : Function<[InferReturn<ValidatorT>[]], MessageT>

) : Omit<ListCallbackInterface<MessageT, ValidatorT, InferReturn<ValidatorT>[], ValidatableT>, 'map'> {

    return new ListCallback<MessageT, ValidatorT, InferReturn<ValidatorT>[], ValidatableT>(validator, ValidateMap , validation, message);
}

