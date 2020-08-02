import Validatable from "@dikac/t-validatable/validatable";
import IterableOr from "@dikac/t-iterable/validatable/boolean/or";

export default function Or<
    Object extends Validatable[]
>(
    object : Object,
    defaults : boolean = true
) : boolean {

    return IterableOr(object, defaults);
}
