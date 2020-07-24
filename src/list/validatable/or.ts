import Validatable from "@dikac/t-validatable/validatable";
import OrBoolean from "../../validatable/list/boolean/or";
import Validatables from "./validatables";

export default function Or<
    Record extends Validatable[]
>(
    validatable : Record
) : Validatables<Record, boolean> {

    return new Validatables(validatable, OrBoolean);
}
