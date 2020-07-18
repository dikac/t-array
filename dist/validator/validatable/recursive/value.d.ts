import RecursiveInferReturn from "./recursive";
import Validator from "@dikac/t-validator/validator";
import Recursive from "../../../recursive/recursive";
export default function Value<Val, Validators extends Recursive<Validator<Val>>>(validators: Validators, value: Val): RecursiveInferReturn<Validators>;
