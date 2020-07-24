import Guard from "@dikac/t-function/boolean/guard";

/**
 * Check if {@param list} is {@link Recursive} with {@template Value} value
 *
 * {@param validation} is use to validate for {@template Value}
 */
export default function List<
    Value,
    Assumption extends Value[]
>(
    list : unknown,
    validation : Guard<unknown,  Value>,
) : list is Assumption {

    if(!Array.isArray(list)) {

        return false;
    }

    for(let property in list) {

        // @ts-ignore
        const value = list[property];

        if(validation(value)) {

           continue;
        }

        if(Array.isArray(value)) {

            if(List(value, validation)) {

                continue;
            }
        }

        return false;
    }

    return true;
}
