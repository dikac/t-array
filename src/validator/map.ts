import Validator from "@dikac/t-validator/validator";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import ValidateMap from "./validatable/list/map-partial";
import MapCallback, {Interface as MapCallbackInterface} from "./map-callback";
import ListStrict from "./validatable/list/infer";
import Union from "../union";

export default function Map<
    ValidatorsT extends Validator[] = Validator[],
    ValidatableT extends Validatable = Validatable,
    MessageT = unknown,
>(
    validators : ValidatorsT,
    validation : Function<[Union<ListStrict<ValidatorsT>>], ValidatableT>,
    message : Function<[Union<ListStrict<ValidatorsT>>], MessageT>
) : MapCallbackInterface<ValidatorsT, Union<ListStrict<ValidatorsT>>, MessageT, ValidatableT> {

    return new MapCallback(validators, ValidateMap, validation, message);
}
