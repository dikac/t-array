import RecursiveInferArgument from "../../list/validator/parameter/parameter";
import RecursiveInferReturn from "./map";
import Validator from "@dikac/t-validator/validator";
import { List } from "ts-toolbelt";
export default function MapStandard<Validators extends Validator[]>(values: RecursiveInferArgument<Validators>, validators: Validators, stopInvalid: true): List.Writable<List.Partial<RecursiveInferArgument<Validators>>> | List.UnionOf<RecursiveInferReturn<Validators>>[];
export default function MapStandard<Validators extends Validator[]>(values: RecursiveInferArgument<Validators>, validators: Validators, stopInvalid: false): RecursiveInferReturn<Validators>;
