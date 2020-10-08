import RemovesValue from "./removes-value";
import Equal from "@dikac/t-boolean/equal";

export default function RemovesValues<Value>(
    array : Value[],
    values : Iterable<Value>,
    validator : (arrayValue : Value, valueArgument : Value) => boolean = Equal,
    start : number = 0,
    end : number = Infinity,
    limit : number = Infinity
) : Value[] {

    let removed : Value[]  = [];

    for (let value of values) {

        let _removed = RemovesValue(array, value, validator, start, end, limit);
        limit = limit - _removed.length;

        removed.push(..._removed);
    }

    return removed;
}
