import Validatable from "@dikac/t-validatable/validatable";
import IterableOr from "@dikac/t-iterable/validatable/boolean/or";

export default function Or<
    Validatables extends Validatable[]
>(
    validatables : Validatables,
    defaults : boolean = true
) : boolean {

    return IterableOr(validatables, defaults);
}
