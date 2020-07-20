import RecursiveInferArgument from "../../recursive/validator/parameter/parameter";
import RecursiveInferReturn from "./recursive";
import Validator from "@dikac/t-validator/validator";
import Recursive from "../../recursive/recursive";
import { Object } from "ts-toolbelt";
export default function Map<Validators extends Recursive<Validator>>(validators: Validators, values: RecursiveInferArgument<Validators>, stopInvalid: true): Object.Partial<RecursiveInferReturn<Validators>, 'deep'>;
export default function Map<Validators extends Recursive<Validator>>(validators: Validators, values: RecursiveInferArgument<Validators>, stopInvalid: false): RecursiveInferReturn<Validators>;
