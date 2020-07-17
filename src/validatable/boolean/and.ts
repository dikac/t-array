import Validatable from "@dikac/t-validatable/validatable";
import IterableAnd from "@dikac/t-iterable/validatable/boolean/and";

export default function And<
    Validatables extends Validatable[]
    >(
    validatables : Validatables,
    defaults : boolean = true
) : boolean {

    return IterableAnd(validatables, defaults);
}
