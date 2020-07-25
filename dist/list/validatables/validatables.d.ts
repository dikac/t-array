import Validatable from "@dikac/t-validatable/validatable";
import { List } from "ts-toolbelt";
export default interface Validatables<Record extends List.Partial<Validatable[]> = List.Partial<Validatable[]>> {
    validatables: Record;
}
