import Validator from "@dikac/t-validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import InferReturn from "@dikac/t-validator/validatable/infer";
import ListCallback, {Interface as ListCallbackInterface} from "./list-callback";
import ValidateMapPartial from "./validatable/list/list-partial";
import Union from "../union";

export default function List<
    MessageT = unknown,
    ValidatorT extends Validator = Validator,
    ValidatableT extends Validatable  = Validatable
>(
     validator : ValidatorT,
     validation : Function<[Union<InferReturn<ValidatorT>[]>], ValidatableT>,
     message : Function<[Union<InferReturn<ValidatorT>[]>], MessageT>

) : ListCallbackInterface<MessageT, ValidatorT, Union<InferReturn<ValidatorT>[]>, ValidatableT> {

    return new ListCallback(validator, ValidateMapPartial, validation, message);
}


