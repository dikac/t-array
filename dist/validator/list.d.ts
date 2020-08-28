import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import InferReturn from "@dikac/t-validator/validatable/infer";
import { Interface as ListCallbackInterface } from "./list-callback";
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
export default function List<MessageT = unknown, ValidatorT extends Validator = Validator, ValidatableT extends Validatable = Validatable>(validator: ValidatorT, validation: (result: InferReturn<ValidatorT>[]) => ValidatableT, message: (result: InferReturn<ValidatorT>[]) => MessageT): Omit<ListCallbackInterface<MessageT, ValidatorT, InferReturn<ValidatorT>[], ValidatableT>, 'map'>;
