import ValidatableInterface from "@dikac/t-validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import IterableOr from "@dikac/t-iterable/validatable/boolean/or";
import Value from "@dikac/t-value/value";
import Array from "./array";

export default function Or<Validatables extends ValidatableInterface[]>(
    validatables : Validatables,
    defaults : boolean = true
) : Validatables & Readonly<Validatable> & {defaults:boolean} & Readonly<Value<Validatables>> {

    let array = new Array(validatables, IterableOr, defaults, null);
    array.value = <any> array;
    return <any> array;

}

