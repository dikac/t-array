import Validator from "@dikac/t-validator/validator";
import Union from "../../../union";
import Map from "../../../map";
import {List as ListHelper} from "ts-toolbelt";
import InferReturn from "@dikac/t-validator/validatable/infer";

export default function ListPartial<
    ValueType extends unknown[],
    ValidatorType extends Validator<ListHelper.UnionOf<ValueType>>
>(
    values : ValueType,
    validator : ValidatorType,
) : Union<Map<ValueType, InferReturn<ValidatorType>>> {

    const result : Union<Map<ValueType, InferReturn<ValidatorType>>> = [];

    for(const [property, value] of values.entries()) {

        const validatable = validator.validate(value);

        result[property] = <InferReturn<ValidatorType>> validatable;

        if(!validatable.valid) {

            return result;
        }
    }

    return result;
}
