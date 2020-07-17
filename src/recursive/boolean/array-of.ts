import RecordInterface from "../recursive";
import Guard from "@dikac/t-function/boolean/guard";

/**
 * Check if {@param record} is {@link Recursive} with {@template Value} value
 *
 * {@param validation} is use to validate for {@template Value}
 * optionally {@param prop} use to validate object property
 */
export default function ArrayOf<
    Value,
    Assumption extends RecordInterface<Value>,
    Key extends string|number|symbol = string|number|symbol
>(
    record : any,
    validation : Guard<any,  Value>,
) : record is Assumption {

    if(!Array.isArray(record)) {

        return false;
    }

    for(let property in record) {

        // @ts-ignore
        const value = record[property];

        if(validation(value)) {

           continue;
        }

        if(Array.isArray(value)) {

            if(ArrayOf(value, validation)) {

                continue;
            }
        }

        return false;
    }

    return true;
}
