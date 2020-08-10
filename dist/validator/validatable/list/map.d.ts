import ListArgument from "../../base/list/infer";
import ListReturn from "./infer";
import Validator from "@dikac/t-validator/validator";
export default function Map<Validators extends Validator[]>(values: ListArgument<Validators>, validators: Validators): ListReturn<Validators>;
