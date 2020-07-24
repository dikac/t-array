import RecursiveInferReturn from "./map";
import Validator from "@dikac/t-validator/validator";
import { List } from "ts-toolbelt";
export default function Value<Val, Validators extends Validator<Val>[]>(value: Val, validators: Validators, stopInvalid: true): List.Partial<RecursiveInferReturn<Validators>> | List.UnionOf<RecursiveInferReturn<Validators>>[];
export default function Value<Val, Validators extends Validator<Val>[]>(value: Val, validators: Validators, stopInvalid: false): RecursiveInferReturn<Validators>;
