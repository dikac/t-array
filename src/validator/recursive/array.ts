import ValidatorType from "@dikac/t-validator/boolean/validator";
import RecursiveInferArgument from "./infer/argument";
import RecursiveInferReturn from "./infer/return";
import ThrowableValue from "./assert/throwable/value";
import ThrowableObjectValue from "../../assert/throwable/value";
import Validator from "@dikac/t-validator/validator";
import Recursive from "../../recursive/recursive";

export default function Array<
    Validators extends Recursive<Validator<unknown>>
    >(
    validators : Validators,
    values : RecursiveInferArgument<Validators>
) : RecursiveInferReturn<Validators> {

    let object : RecursiveInferReturn<Validators> =
        // @ts-ignore
        <RecursiveInferReturn<Validators>>[];

    for(let [property, validator] of validators.entries()) {

        const value = values[property];

        if(ValidatorType(validator)) {

            object[property] = validator.validate(value);
            continue;
        }

        if(globalThis.Array.isArray(validator)) {

            if(globalThis.Array.isArray(value)) {

                // @ts-ignore
                object[property] =
                    Array(validator,  <RecursiveInferArgument<Validators>>value);

            } else {

                throw ThrowableObjectValue(property, 'array');
            }

        } else {


            throw ThrowableValue(property);
        }

    }

    return  object;
}
