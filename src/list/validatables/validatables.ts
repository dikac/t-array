import Validatable from "@dikac/t-validatable/validatable";
import {List} from "ts-toolbelt";
import Validator from "@dikac/t-validator/validator";

export default interface Validatables<
    Record extends List.Partial<Validatable[]> = List.Partial<Validatable[]>
> {

    validatables : Record;
}
