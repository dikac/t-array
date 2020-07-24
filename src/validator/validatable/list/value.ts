import ValidatorType from "@dikac/t-validator/boolean/validator";
import RecursiveInferReturn from "./map";
import ThrowableValue from "../../../validatable/list/assert/throwable/value";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "./partial-union";

export default function Value<
    Val,
    Validators extends Validator<Val>[]
>(
    value : Val,
    validators : Validators,
    stopInvalid : true
) : PartialUnion<Validators>;

export default function Value<
    Val,
    Validators extends Validator<Val>[]
>(
    value : Val,
    validators : Validators,
    stopInvalid : false
) : RecursiveInferReturn<Validators>;

export default function Value<
    Val,
    Validators extends Validator<Val>[]
>(
    value : Val,
    validators : Validators,
    stopInvalid : boolean
) : RecursiveInferReturn<Validators> | PartialUnion<Validators> {

    let array : RecursiveInferReturn<Validators> =
        // @ts-ignore
        <RecursiveInferReturn<Validators>>[];

    for(let [property, validator] of validators.entries()) {

        if(ValidatorType(validator)) {

            array[property] = validator.validate(value);

            if(stopInvalid && !array[property].valid) {

                return array;
            }

            continue;
        }

        throw ThrowableValue(property);
    }

    return  array;
}
