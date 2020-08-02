import Validatable from "@dikac/t-validatable/validatable";
import IterableAnd from "@dikac/t-iterable/validatable/boolean/and";
import Callback from "./callback";

export default function And<Validatables extends Validatable[]>(
    validatables : Validatables,
    defaults : boolean = true
) : Callback<Validatables> {

    return new Callback(validatables, (v)=>IterableAnd(v, defaults));
}

