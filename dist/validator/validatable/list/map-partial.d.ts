import ListArgument from "../../base/list/infer";
import Validator from "@dikac/t-validator/validator";
import ListStrict from "./infer";
import Union from "../../../union";
export default function Map<Validators extends Validator[]>(values: ListArgument<Validators>, validators: Validators, stop?: boolean): Union<ListStrict<Validators>>;
