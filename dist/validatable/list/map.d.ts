import RecursiveInferArgument from "../../list/validator/parameter/parameter";
import RecursiveInferReturn from "./recursive";
import Validator from "@dikac/t-validator/validator";
import { List } from "ts-toolbelt";
export default function Map<Validators extends Validator[]>(values: RecursiveInferArgument<Validators>, validators: Validators, stopInvalid: true): List.Partial< RecursiveInferReturn<Validators>> | List.UnionOf<RecursiveInferReturn<Validators>>[];
export default function Map<Validators extends Validator[]>(values: RecursiveInferArgument<Validators>, validators: Validators, stopInvalid: false): RecursiveInferReturn<Validators>;
