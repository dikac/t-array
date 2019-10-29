export default function Index<Value = any>(
    array : Value[],
    value : Value,
    validator : (arrayValue : Value, valueArgument : Value) => boolean,
    fromIndex : number = 0
) : number|null {

    let direct = array.indexOf(value, fromIndex);

    if(direct !== -1) {

        return direct;
    }

    for(let i = fromIndex; array[i] !== undefined; i++) {

        if(validator(array[i], value)) {

            return i;
        }
    }

    return null;
}