import ListArgument from "../../base/list/infer";
import ListReturn from "./infer";
import Validator from "@dikac/t-validator/validator";
import {List} from "ts-toolbelt";
import ListStrict from "./infer";
import Union from "../../../union";

export default function Map<
    Validators extends Validator[]
>(
    values : ListArgument<Validators>,
    validators : Validators,
) : Union<ListStrict<Validators>> {

    const result : ListReturn<Validators>|Union<ListStrict<Validators>> = [];

    for(let [property, validator] of validators.entries()) {

        const value = values[property];
        const validatable = validator.validate(value);

        result[property] = <List.UnionOf<ListStrict<Validators>>> validatable;

        if(!validatable.valid) {

            return result;
        }
    }

    return  result;
}
