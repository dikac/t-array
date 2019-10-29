import Index from "../number";

export default function Has<Value>(
    array : Value[],
    value : Value,
    validator : (arrayValue : Value, valueArgument : Value) => boolean,
    fromIndex : number = 0
) : boolean {
    return Index<Value>(array, value, validator, fromIndex) !== null;
}