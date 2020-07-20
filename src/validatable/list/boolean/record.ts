import Validatable from "@dikac/t-validatable/validatable";
import TypeRecord from "../../../list/boolean/guards";
import ValidatableType from "@dikac/t-validatable/boolean/validatable";
//import RecursiveRecord from "../../../recursive/recursive";

/**
 * Check if {@param record} is array of {@link Validatable}
 */
export default function Record<
    Object extends Validatable[]//RecursiveRecord<Validatable>,
>(
    record : unknown,
) : record is Object {

    return TypeRecord(record, ValidatableType)
}
