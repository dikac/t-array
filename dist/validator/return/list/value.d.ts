import ListReturn from "./infer";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "./partial-union";
export default function Value<Val, Validators extends Validator<unknown, Val>[]>(value: Val, validators: Validators, stopInvalid: true): PartialUnion<Validators>;
export default function Value<Val, Validators extends Validator<unknown, Val>[]>(value: Val, validators: Validators, stopInvalid: false): ListReturn<Validators>;
