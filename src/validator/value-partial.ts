import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateValuePartial from "./validatable/list/value-partial";
import ListReturn from "./validatable/list/infer";
import ValueCallback, {Interface as ValueCallbackInterface} from "./value-callback";
import Union from "../union";
import Message from "@dikac/t-message/message";

/**
 * more specific implementation of {@link ValueCallback}
 *
 * Validate value with list of {@link Validator}
 * stop on encounter invalid result from {@link Validator}
 *
 * @param validators
 * list of {@link Validator} to be used against value
 *
 * @param validation
 * combined partial result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * combined partial result from {@link Validator} list into {@link Message} value
 */
export default function ValuePartial<
    BaseT = unknown,
    ValueT extends BaseT = BaseT,
    ValidatorsT extends Validator<BaseT, ValueT>[] = Validator<BaseT, ValueT>[],
    ReturnT extends Validatable = Validatable,
    MessageT = unknown,
>(
    validators : ValidatorsT,
    validation : (result:Union<ListReturn<ValidatorsT>>)=>ReturnT,
    message : (result:Union<ListReturn<ValidatorsT>>)=>MessageT
) : Omit<ValueCallbackInterface<BaseT, ValueT, MessageT, ValidatorsT, Union<ListReturn<ValidatorsT>>, ReturnT>, 'map'> {

    return new ValueCallback(validators, ValidateValuePartial, validation, message);
}
