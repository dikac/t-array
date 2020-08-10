import Validator from "@dikac/t-validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateValuePartial from "./validatable/list/value-partial";
import ListReturn from "./validatable/list/infer";
import ValueCallback, {Interface as ValueCallbackInterface} from "./value-callback";
import Union from "../union";

export default function ValuePartial<
    BaseT = unknown,
    ValueT extends BaseT = BaseT,
    ValidatorsT extends Validator<BaseT, ValueT>[] = Validator<BaseT, ValueT>[],
    ReturnT extends Validatable = Validatable,
    MessageT = unknown,
>(
    validators : ValidatorsT,
    validation : Function<[Union<ListReturn<ValidatorsT>>], ReturnT>,
    message : Function<[Union<ListReturn<ValidatorsT>>], MessageT>
) : ValueCallbackInterface<BaseT, ValueT, MessageT, ValidatorsT, Union<ListReturn<ValidatorsT>>, ReturnT> {
    return new ValueCallback(validators, ValidateValuePartial, validation, message);
}
