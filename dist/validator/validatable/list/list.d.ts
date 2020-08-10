import Validator from "@dikac/t-validator/validator";
import Map from "../../../map";
import { List as ListHelper } from "ts-toolbelt";
import InferReturn from "@dikac/t-validator/validatable/infer";
export default function List<ValueT extends unknown[], ValidatorT extends Validator<ListHelper.UnionOf<ValueT>>>(values: ValueT, validator: ValidatorT): Map<ValueT, InferReturn<ValidatorT>>;
