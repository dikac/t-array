import Index from "../number";
import Function from "@dikac/t-function/function";

export default function Has<Value>(
    array : Value[],
    compare : Value,
    validator : Function<[Value, Value], boolean> = (value1 : Value, value2 : Value) => value1 === value2,
    fromIndex : number = 0
) : boolean {
    return Index<Value>(array, compare, validator, fromIndex) !== null;
}
