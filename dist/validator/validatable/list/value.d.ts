import RecursiveInferReturn from "./map";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "./partial-union";
export default function Value<Val, Validators extends Validator<Val>[]>(value: Val, validators: Validators, stopInvalid: true): PartialUnion<Validators>;
export default function Value<Val, Validators extends Validator<Val>[]>(value: Val, validators: Validators, stopInvalid: false): RecursiveInferReturn<Validators>;
