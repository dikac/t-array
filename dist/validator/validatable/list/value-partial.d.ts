import Validator from "@dikac/t-validator/validator";
import ListStrict from "./infer";
import Union from "../../../union";
export default function ValuePartial<ValueType, Validators extends Validator<unknown, ValueType>[]>(value: ValueType, validators: Validators, stop?: boolean): Union<ListStrict<Validators>>;
