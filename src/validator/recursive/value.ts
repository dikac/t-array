import ValidatorType from "@dikac/t-validator/boolean/validator";
import RecursiveInferReturn from "./infer/return";
import ThrowableValue from "./assert/throwable/value";
import Validator from "@dikac/t-validator/validator";
import Recursive from "../../recursive/recursive";

export default function Value<
    Val,
    Validators extends Recursive<Validator<Val>>
    >(
    validators : Validators,
    value : Val
) : RecursiveInferReturn<Validators> {

    let array : RecursiveInferReturn<Validators> =
        // @ts-ignore
        <RecursiveInferReturn<Validators>>[];

    for(let [property, validator] of validators.entries()) {

        if(ValidatorType(validator)) {

            array[property] = validator.validate(value);
            continue;
        }

        if(globalThis.Array.isArray(validator)) {

            // @ts-ignore
            array[property] =
                Value(validator,  value);

        } else {

            throw ThrowableValue(property);
        }

    }

    return  array;
}
