import Validatable from "@dikac/t-validatable/validatable";
import TypeRecord from "../../../list/boolean/list";
import ValidatableType from "@dikac/t-validatable/boolean/validatable";

/**
 * Check if {@param list} is array of {@link Validatable}
 */
export default function Record<
    Object extends Validatable[]
>(
    list : unknown,
) : list is Object {

    return TypeRecord(list, ValidatableType)
}
