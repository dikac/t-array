import Extract from "./any/extract";
import Index from "./number";

export default function RemovesValue<Value = any>(
    array : Value[],
    value : Value,
    validator : (arrayValue : Value, valueArgument : Value) => boolean
        = (arrayValue : Value, valueArgument : Value) => arrayValue === valueArgument,
    start : number = 0,
    end : number = Infinity,
    limit : number = Infinity
) : Value[] {

    let removed : Value[]  = [];

    while (limit > 0) {

        let index = Index(array, value, validator, start, end);

        if(index !== null) {

            let value = Extract<Value>(array, index);

            if(value === undefined) {

                throw new Error('TODO');
            }

            removed.push(value);
            limit--;

        } else {

            break;
        }
    }

    return  removed;
}