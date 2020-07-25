import RecursiveInferArgument from "../../../list/validator/parameter/parameter";
import RecursiveInferReturn from "./list";
import Validator from "@dikac/t-validator/validator";
import PartialUnion from "./partial-union";
export default function Standard<Validators extends Validator[]>(values: RecursiveInferArgument<Validators>, validators: Validators, stopInvalid: true): PartialUnion<Validators>;
export default function Standard<Validators extends Validator[]>(values: RecursiveInferArgument<Validators>, validators: Validators, stopInvalid: false): RecursiveInferReturn<Validators>;
