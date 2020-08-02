import ListReturn from "./infer";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "./partial-union";
import {List} from "ts-toolbelt";
import ListStrict from "./infer";

export default function Value<
    Val,
    Validators extends Validator<unknown, Val>[]
>(
    value : Val,
    validators : Validators,
    stopInvalid : true
) : PartialUnion<Validators>;

export default function Value<
    Val,
    Validators extends Validator<unknown, Val>[]
>(
    value : Val,
    validators : Validators,
    stopInvalid : false
) : ListReturn<Validators>;

export default function Value<
    Val,
    Validators extends Validator<unknown, Val>[]
>(
    value : Val,
    validators : Validators,
    stopInvalid : boolean
) : ListReturn<Validators> | PartialUnion<Validators> {

    const result : ListReturn<Validators> | PartialUnion<Validators> = [];

    for(const [property, validator] of validators.entries()) {

        const validatable = validator.validate(value);

        result[property] = <List.UnionOf<ListStrict<Validators>>> validatable;
``
        if(!validatable.valid && stopInvalid) {

            return result;
        }
    }

    return  result;
}
