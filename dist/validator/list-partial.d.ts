import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import InferReturn from "@dikac/t-validator/validatable/infer";
import Union from "../union";
import List from "./list";
/**
 * more specific implementation of {@link ListCallback}
 *
 * Validate list of value with {@link Validator}
 * stop on encounter invalid result from {@link Validator}
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
export default function ListPartial<MessageType = unknown, ValidatorType extends Validator = Validator, ValidatableType extends Validatable = Validatable>(validator: ValidatorType, validation: (result: Union<InferReturn<ValidatorType>[]>) => ValidatableType, message: (result: Union<InferReturn<ValidatorType>[]>) => MessageType): List<MessageType, ValidatorType, Union<InferReturn<ValidatorType>[]>, ValidatableType>;
