import Validatable from "@dikac/t-validatable/validatable";
import IterableOr from "@dikac/t-iterable/validatable/boolean/or";
import Callback from "./callback";

export default function Or<Validatables extends Validatable[]>(
    validatables : Validatables,
    defaults : boolean = true
) : Callback<Validatables> {

    return new Callback(validatables, (v)=>IterableOr(v, defaults));
}

