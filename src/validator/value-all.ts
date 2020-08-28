import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateValue from "./validatable/list/value";
import ListReturn from "./validatable/list/infer";
import ValueCallback from "./value-callback";
import Message from "@dikac/t-message/message";
import Value from "./value";

/**
 * more specific implementation of {@link ValueCallback}
 *
 * Validate value with all list of {@link Validator}
 *
 * @param validators
 * list of {@link Validator} to be used against value
 *
 * @param validation
 * combined all result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * combined all result from {@link Validator} list into {@link Message} value
 */
export default function ValueAll<
    BaseT = unknown,
    ValueT extends BaseT = BaseT,
    ValidatorsT extends Validator<BaseT, ValueT>[] = Validator<BaseT, ValueT>[],
    ReturnT extends Validatable = Validatable,
    MessageT = unknown,
>(
    validators : ValidatorsT,
    validation : (result:ListReturn<ValidatorsT>)=>ReturnT,
    message : (result:ListReturn<ValidatorsT>)=>MessageT

) : Value<BaseT, ValueT, MessageT, ValidatorsT, ListReturn<ValidatorsT>, ReturnT> {

    return new ValueCallback(
        validators,
        ValidateValue,
        validation,
        message
    );
}
