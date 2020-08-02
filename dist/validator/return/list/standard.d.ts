import ListArgument from "../../parameter/base/list/infer";
import ListReturn from "./infer";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "./partial-union";
export default function Standard<Validators extends Validator[]>(values: ListArgument<Validators>, validators: Validators, stopInvalid: true): PartialUnion<Validators>;
export default function Standard<Validators extends Validator[]>(values: ListArgument<Validators>, validators: Validators, stopInvalid: false): ListReturn<Validators>;
