import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListReturn from "./validatable/list/infer";
import { Interface as ValueCallbackInterface } from "./value-callback";
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
export default function Value<BaseT = unknown, ValueT extends BaseT = BaseT, ValidatorsT extends Validator<BaseT, ValueT>[] = Validator<BaseT, ValueT>[], ReturnT extends Validatable = Validatable, MessageT = unknown>(validators: ValidatorsT, validation: (result: ListReturn<ValidatorsT>) => ReturnT, message: (result: ListReturn<ValidatorsT>) => MessageT): Omit<ValueCallbackInterface<BaseT, ValueT, MessageT, ValidatorsT, ListReturn<ValidatorsT>, ReturnT>, 'map'>;
