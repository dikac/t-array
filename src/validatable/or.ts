import ValidatableInterface from "@dikac/t-validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import IterableOr from "@dikac/t-iterable/validatable/boolean/or";
import Combine from "./combine";

export default function Or<Validatables extends ValidatableInterface[]>(
    validatables : Validatables,
    defaults : boolean = true
) : {validatables:Validatables} & Readonly<Validatable> & {defaults:boolean} {

    let array = new Combine(validatables, IterableOr, defaults, null);
    return  array;

}

