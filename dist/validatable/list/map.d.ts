import RecursiveInferArgument from "../../list/validator/parameter/parameter";
import RecursiveInferReturn from "./recursive";
import Validator from "@dikac/t-validator/validator";
import { List } from "ts-toolbelt";
export default function Map<Validators extends Validator[]>(validators: Validators, values: RecursiveInferArgument<Validators>, stopInvalid: true): List.Partial<Validators>;
export default function Map<Validators extends Validator[]>(validators: Validators, values: RecursiveInferArgument<Validators>, stopInvalid: false): RecursiveInferReturn<Validators>;
