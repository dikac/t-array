import RecursiveInferReturn from "./recursive";
import Validator from "@dikac/t-validator/validator";
import { List } from "ts-toolbelt";
export default function Value<Val, Validators extends Validator<Val>[]>(validators: Validators, value: Val, stopInvalid: true): List.Partial<RecursiveInferReturn<Validators>>;
export default function Value<Val, Validators extends Validator<Val>[]>(validators: Validators, value: Val, stopInvalid: false): RecursiveInferReturn<Validators>;
