import ListArgument from "../../parameter/base/list/infer";
import ListReturn from "./infer";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "./partial-union";
import {List} from "ts-toolbelt";
import ListStrict from "./infer";

export default function Standard<
    Validators extends Validator[]
>(
    values : ListArgument<Validators>,
    validators : Validators,
    stopInvalid : true
) : PartialUnion<Validators>;

export default function Standard<
    Validators extends Validator[]
    >(
    values : ListArgument<Validators>,
    validators : Validators,
    stopInvalid : false
) : ListReturn<Validators>;

export default function Standard<
    Validators extends Validator[]
    >(
    values : ListArgument<Validators>,
    validators : Validators,
    stopInvalid : boolean
) : ListReturn<Validators>|PartialUnion<Validators> {

    const result : ListReturn<Validators>|PartialUnion<Validators> = [];

    for(let [property, validator] of validators.entries()) {

        const value = values[property];
        const validatable = validator.validate(value);

        result[property] = <List.UnionOf<ListStrict<Validators>>> validatable;

        if(!validatable.valid && stopInvalid) {

            return result;
        }

    }

    return  result;
}
