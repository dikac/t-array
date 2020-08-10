import ListReturn from "./infer";
import Validator from "@dikac/t-validator/validator";
export default function Value<ValueT, Validators extends Validator<unknown, ValueT>[]>(value: ValueT, validators: Validators): ListReturn<Validators>;
