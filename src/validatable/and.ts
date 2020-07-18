import ValidatableInterface from "@dikac/t-validatable/validatable";
import IterableAnd from "@dikac/t-iterable/validatable/boolean/and";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Array from "./array";

export default function And<Validatables extends ValidatableInterface[]>(
    validatables : Validatables,
    defaults : boolean = true
) : Validatables & Readonly<Validatable> & {defaults:boolean} & Readonly<Value<Validatables>> {

    let array = new Array(validatables, IterableAnd, defaults, null);
    array.value = <any> array;
    return <any> array;

}

