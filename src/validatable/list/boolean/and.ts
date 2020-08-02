import Validatable from "@dikac/t-validatable/validatable";
import IterableAnd from "@dikac/t-iterable/validatable/boolean/and";

export default function And<
    Object extends Validatable[]
>(
    object : Object,
    defaults : boolean = true
) : boolean {

    return IterableAnd(object, defaults);
}
