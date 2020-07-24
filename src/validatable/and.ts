import ValidatableInterface from "@dikac/t-validatable/validatable";
import IterableAnd from "@dikac/t-iterable/validatable/boolean/and";
import Validatable from "@dikac/t-validatable/validatable";
import Combine from "./combine";

export default function And<Validatables extends ValidatableInterface[]>(
    validatables : Validatables,
    defaults : boolean = true
) : {validatables:Validatables} & Readonly<Validatable> & {defaults:boolean} {

    let array = new Combine(validatables, IterableAnd, defaults, null);
    return  array;

}

