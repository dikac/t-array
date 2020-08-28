import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListReturn from "./validatable/list/infer";
import MapCallbackInterface from "./map";
/**
 * more specific implementation of {@link MapCallback}
 *
 * Validate list of value with list of {@link Validator}, according to their indexes
 *
 * @param validators
 * list of {@link Validator} to be used against list of value
 *
 * @param validation
 * process all result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * process all result from {@link Validator} list into {@link Message} value
 */
export default function MapAll<ValidatorsT extends Validator[] = Validator[], ValidatableT extends Validatable = Validatable, MessageT = unknown>(validators: ValidatorsT, validation: (result: ListReturn<ValidatorsT>) => ValidatableT, message: (result: ListReturn<ValidatorsT>) => MessageT): Omit<MapCallbackInterface<ValidatorsT, ListReturn<ValidatorsT>, MessageT, ValidatableT>, 'map'>;
