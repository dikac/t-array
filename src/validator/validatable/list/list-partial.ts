import Validator from "@dikac/t-validator/validator";
import Union from "../../../union";
import Map from "../../../map";
import {List as ListHelper} from "ts-toolbelt";
import InferReturn from "@dikac/t-validator/validatable/infer";

export default function ListPartial<
    ValueT extends unknown[],
    ValidatorT extends Validator<ListHelper.UnionOf<ValueT>>
>(
    values : ValueT,
    validator : ValidatorT,
) : Union<Map<ValueT, InferReturn<ValidatorT>>> {

    const result : Union<Map<ValueT, InferReturn<ValidatorT>>> = [];

    for(const [property, value] of values.entries()) {

        const validatable = validator.validate(value);

        result[property] = <InferReturn<ValidatorT>> validatable;

        if(!validatable.valid) {

            return result;
        }
    }

    return result;
}
