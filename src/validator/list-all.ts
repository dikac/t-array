import Validator from "@dikac/t-validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import InferReturn from "@dikac/t-validator/validatable/infer";
import ListCallback, {Interface as ListCallbackInterface} from "./list-callback";
import ValidateMap from "./validatable/list/list";

export default function ListAll<
    MessageT = unknown,
    ValidatorT extends Validator = Validator,
    ValidatableT extends Validatable  = Validatable
>(
    validator : ValidatorT,
    validation : Function<[InferReturn<ValidatorT>[]], ValidatableT>,
    message : Function<[InferReturn<ValidatorT>[]], MessageT>

) : ListCallbackInterface<MessageT, ValidatorT, InferReturn<ValidatorT>[], ValidatableT> {

    return new ListCallback<MessageT, ValidatorT, InferReturn<ValidatorT>[], ValidatableT>(validator, ValidateMap , validation, message);
}

