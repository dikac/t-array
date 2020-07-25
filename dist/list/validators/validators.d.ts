import Validator from "@dikac/t-validator/validator";
import { List } from "ts-toolbelt";
export default interface Validators<Record extends List.Partial<Validator[]> = List.Partial<Validator[]>> {
    validators: Record;
}
