import RemoveValue from "../boolean/remove-value";

export default function RemoveValues<Value = any>(
    array : Value[],
    values : Value[],
    validator : (arrayValue : Value, valueArgument : Value) => boolean,
    fromIndex : number = 0
) : number {

    let removed = 0;
    for(let value of values) {

        if(RemoveValue<Value>(array, value, validator, fromIndex)) {

            removed++;
        }
    }

    return removed;
}