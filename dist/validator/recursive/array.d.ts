import RecursiveInferArgument from "./infer/argument";
import RecursiveInferReturn from "./infer/return";
import Validator from "@dikac/t-validator/validator";
import Recursive from "../../recursive/recursive";
export default function Array<Validators extends Recursive<Validator<unknown>>>(validators: Validators, values: RecursiveInferArgument<Validators>): RecursiveInferReturn<Validators>;
