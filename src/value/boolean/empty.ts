import Value from "@dikac/t-value/value";
import EmptyArgument from "../../boolean/empty";

/**
 * @deprecated
 */
export default function Empty(
    object : Value<undefined[]>,
) : boolean {

    return EmptyArgument(object.value)
}
