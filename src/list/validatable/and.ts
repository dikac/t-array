import Validatable from "@dikac/t-validatable/validatable";
import AndBoolean from "../../validatable/list/boolean/and";
import Validatables from "./validatables";
import {List} from "ts-toolbelt";

export default function And<
    Record extends List.Partial<Validatable[]>
>(
    validatable : Record
) : Validatables<Record, boolean> {

    return new Validatables(validatable, AndBoolean);
}
