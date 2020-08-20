import Validator from "@dikac/t-validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import { Interface as MapCallbackInterface } from "./map-callback";
import ListStrict from "./validatable/list/infer";
import Union from "../union";
/**
 * more specific implementation of {@link MapCallback}
 *
 * Validate list of value with list of {@link Validator}, according to their indexes
 * stop on encounter invalid result from {@link Validator}
 *
 * @param validators
 * list of {@link Validator} to be used against list of value
 *
 * @param validation
 * process partial result from {@link Validator} list into {@link Validatable}
 *
 * @param message
 * process partial result from {@link Validator} list into {@link Message} value
 */
export default function MapPartial<ValidatorsT extends Validator[] = Validator[], ValidatableT extends Validatable = Validatable, MessageT = unknown>(validators: ValidatorsT, validation: Function<[Union<ListStrict<ValidatorsT>>], ValidatableT>, message: Function<[Union<ListStrict<ValidatorsT>>], MessageT>): Omit<MapCallbackInterface<ValidatorsT, Union<ListStrict<ValidatorsT>>, MessageT, ValidatableT>, 'map'>;
