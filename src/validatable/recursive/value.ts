import ValidatorType from "@dikac/t-validator/boolean/validator";
import RecursiveInferReturn from "./recursive";
import ThrowableValue from "./assert/throwable/value";
import Validator from "@dikac/t-validator/validator";
import Recursive from "../../recursive/recursive";
import {Object} from "ts-toolbelt";

export default function Value<
    Val,
    Validators extends Recursive<Validator<Val>>
    >(
    validators : Validators,
    value : Val,
    stopInvalid : true
) : Object.Partial<RecursiveInferReturn<Validators>, 'deep'>;

export default function Value<
    Val,
    Validators extends Recursive<Validator<Val>>
    >(
    validators : Validators,
    value : Val,
    stopInvalid : false
) : RecursiveInferReturn<Validators>;

export default function Value<
    Val,
    Validators extends Recursive<Validator<Val>>
    >(
    validators : Validators,
    value : Val,
    stopInvalid : boolean
) : RecursiveInferReturn<Validators> | Object.Partial<RecursiveInferReturn<Validators>, 'deep'> {

    let array : RecursiveInferReturn<Validators> =
        // @ts-ignore
        <RecursiveInferReturn<Validators>>[];

    for(let [property, validator] of validators.entries()) {

        if(ValidatorType(validator)) {

            let validatable = validator.validate(value);

            if(stopInvalid && !validatable.valid) {

                return array;
            }

            array[property] = validatable;
            continue;
        }

        if(globalThis.Array.isArray(validator)) {

            // @ts-ignore
            array[property] =
                Value(validator, value, <any>stopInvalid);

        } else {

            throw ThrowableValue(property);
        }

    }

    return  array;
}
