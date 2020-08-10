import Validator from "@dikac/t-validator/validator";
import Union from "../../../union";
import Map from "../../../map";
import {List as ListHelper} from "ts-toolbelt";
import InferReturn from "@dikac/t-validator/validatable/infer";

export default function List<
    ValueT extends unknown[],
    ValidatorT extends Validator<ListHelper.UnionOf<ValueT>>
>(
    values : ValueT,
    validator : ValidatorT,
) : Map<ValueT, InferReturn<ValidatorT>> {

    const result : Map<ValueT, InferReturn<ValidatorT>> | Union<Map<ValueT, InferReturn<ValidatorT>>> = [];

    for(const [property, value] of values.entries()) {

        const validatable = validator.validate(value);

        result[property] = <InferReturn<ValidatorT>> validatable;
    }

    return <Map<ValueT, InferReturn<ValidatorT>>> result;
}
