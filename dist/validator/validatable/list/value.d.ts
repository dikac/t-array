import ListReturn from "./infer";
import Validator from "@dikac/t-validator/validator";
export default function Value<ValueType, Validators extends Validator<unknown, ValueType>[]>(value: ValueType, validators: Validators): ListReturn<Validators>;
