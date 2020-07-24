import RecursiveInferArgument from "../../../list/validator/parameter/parameter";
import RecursiveInferReturn from "./map";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "./partial-union";

export default function Standard<
    Validators extends Validator[]
>(
    values : RecursiveInferArgument<Validators>,
    validators : Validators,
    stopInvalid : true
) : PartialUnion<Validators>;

export default function Standard<
    Validators extends Validator[]
    >(
    values : RecursiveInferArgument<Validators>,
    validators : Validators,
    stopInvalid : false
) : RecursiveInferReturn<Validators>;

export default function Standard<
    Validators extends Validator[]
    >(
    values : RecursiveInferArgument<Validators>,
    validators : Validators,
    stopInvalid : boolean
) : RecursiveInferReturn<Validators>|PartialUnion<Validators> {

    let object : RecursiveInferReturn<Validators> =
        // @ts-ignore
        <RecursiveInferReturn<Validators>>[];

    for(let [property, validator] of validators.entries()) {

        const value = values[property];

        object[property] = validator.validate(value);

        if(stopInvalid && !object[property].valid) {

            return object;
        }

    }

    return  object;
}
