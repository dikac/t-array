import RecursiveInferArgument from "../../parameter/recursive/recursive";
import RecursiveInferReturn from "./recursive";
import Validator from "@dikac/t-validator/validator";
import Recursive from "../../../recursive/recursive";
export default function Map<Validators extends Recursive<Validator<unknown>>>(validators: Validators, values: RecursiveInferArgument<Validators>): RecursiveInferReturn<Validators>;
