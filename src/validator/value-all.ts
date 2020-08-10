import Validator from "@dikac/t-validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateValue from "./validatable/list/value";
import ListReturn from "./validatable/list/infer";
import ValueCallback, {Interface as ValueCallbackInterface} from "./value-callback";

export default function ValueAll<
    BaseT = unknown,
    ValueT extends BaseT = BaseT,
    ValidatorsT extends Validator<BaseT, ValueT>[] = Validator<BaseT, ValueT>[],
    ReturnT extends Validatable = Validatable,
    MessageT = unknown,
>(
    validators : ValidatorsT,
    validation : Function<[ListReturn<ValidatorsT>], ReturnT>,
    message : Function<[ListReturn<ValidatorsT>], MessageT>

) : ValueCallbackInterface<BaseT, ValueT, MessageT, ValidatorsT, ListReturn<ValidatorsT>, ReturnT> {

    return new ValueCallback(
        validators,
        ValidateValue,
        validation,
        message
    );
}
