import Guard from "@dikac/t-function/boolean/guard";

/**
 * Check if {@param record} is {@link Recursive} with {@template Value} value
 *
 * {@param validation} is use to validate for {@template Value}
 */
export default function Guards<
    Value,
    Assumption extends Value[]
>(
    record : unknown,
    validation : Guard<unknown,  Value>,
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

            if(Guards(value, validation)) {

                continue;
            }
        }

        return false;
    }

    return true;
}
