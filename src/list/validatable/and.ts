import Validatable from "@dikac/t-validatable/validatable";
import AndBoolean from "../../validatable/list/boolean/and";
import Validatables from "./validatables";

export default function And<
    Record extends Validatable[]
>(
    validatable : Record
) : Validatables<Record, boolean> {

    return new Validatables(validatable, AndBoolean);
}
