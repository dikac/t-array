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
export default function MapAll<Validators extends Validator[] = Validator[], ValidatableType extends Validatable = Validatable, MessageType = unknown>(validators: Validators, validation: (result: ListReturn<Validators>) => ValidatableType, message: (result: ListReturn<Validators>) => MessageType): Omit<MapCallbackInterface<Validators, ListReturn<Validators>, MessageType, ValidatableType>, 'map'>;
