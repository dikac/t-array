import RemovesValue from "./removes-value";

export default function RemovesValues<Value = any>(
    array : Value[],
    values : Iterable<Value>,
    validator : (arrayValue : Value, valueArgument : Value) => boolean
        = (arrayValue : Value, valueArgument : Value) => arrayValue === valueArgument,
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

    return  removed;
}
