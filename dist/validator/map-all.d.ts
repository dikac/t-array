import Validator from "@dikac/t-validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import ListReturn from "./validatable/list/infer";
import { Interface as MapCallbackInterface } from "./map-callback";
export default function MapAll<ValidatorsT extends Validator[] = Validator[], ValidatableT extends Validatable = Validatable, MessageT = unknown>(validators: ValidatorsT, validation: Function<[ListReturn<ValidatorsT>], ValidatableT>, message: Function<[ListReturn<ValidatorsT>], MessageT>): MapCallbackInterface<ValidatorsT, ListReturn<ValidatorsT>, MessageT, ValidatableT>;
