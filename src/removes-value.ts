import Extract from "./value/value/extract";
import Index from "./number";
import Equal from "@dikac/t-boolean/equal";

export default function RemovesValue<Value>(
    array : Value[],
    value : Value,
    validator : (arrayValue : Value, valueArgument : Value) => boolean = Equal,
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

                // TODO ADD ERROR
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
