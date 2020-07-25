import Validatable from "@dikac/t-validatable/validatable";
import OrBoolean from "../../validatable/list/boolean/or";
import Validatables from "./validatables";
import {List} from "ts-toolbelt";

export default function Or<
    Record extends List.Partial<Validatable[]>
>(
    validatable : Record
) : Validatables<Record, boolean> {

    return new Validatables(validatable, OrBoolean);
}
