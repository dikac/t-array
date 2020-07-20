import RecursiveInferReturn from "./recursive";
import Validator from "@dikac/t-validator/validator";
import Recursive from "../../recursive/recursive";
import { Object } from "ts-toolbelt";
export default function Value<Val, Validators extends Recursive<Validator<Val>>>(validators: Validators, value: Val, stopInvalid: true): Object.Partial<RecursiveInferReturn<Validators>, 'deep'>;
export default function Value<Val, Validators extends Recursive<Validator<Val>>>(validators: Validators, value: Val, stopInvalid: false): RecursiveInferReturn<Validators>;
