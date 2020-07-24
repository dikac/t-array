import ValidatorType from "@dikac/t-validator/boolean/validator";
import RecursiveInferReturn from "./map";
import ThrowableValue from "./assert/throwable/value";
import Validator from "@dikac/t-validator/validator";
import {List} from "ts-toolbelt";

export default function Value<
    Val,
    Validators extends Validator<Val>[]
>(
    value : Val,
    validators : Validators,
    stopInvalid : true
) : List.Partial<RecursiveInferReturn<Validators>>|List.UnionOf<RecursiveInferReturn<Validators>>[];

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
) : RecursiveInferReturn<Validators> | List.Partial<RecursiveInferReturn<Validators>> {

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