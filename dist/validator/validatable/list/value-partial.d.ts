import Validator from "@dikac/t-validator/validator";
import ListStrict from "./infer";
import Union from "../../../union";
export default function ValuePartial<ValueT, Validators extends Validator<unknown, ValueT>[]>(value: ValueT, validators: Validators): Union<ListStrict<Validators>>;
