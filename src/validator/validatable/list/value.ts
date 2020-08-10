import ListReturn from "./infer";
import Validator from "@dikac/t-validator/validator";
import {List} from "ts-toolbelt";
import ListStrict from "./infer";
import Union from "../../../union";

export default function Value<
    ValueT,
    Validators extends Validator<unknown, ValueT>[]
>(
    value : ValueT,
    validators : Validators,
) : ListReturn<Validators> {

    const result : ListReturn<Validators> | Union<ListStrict<Validators>> = <Union<ListStrict<Validators>>>[];

    for(const [property, validator] of validators.entries()) {

        const validatable = validator.validate(value);

        result[property] = <List.UnionOf<ListStrict<Validators>>> validatable;

    }

    return <ListReturn<Validators>> result;
}
