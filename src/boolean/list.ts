import Guard from "@dikac/t-function/boolean/guard";
import Fns from "@dikac/t-function/function-single";

/**
 * Check if {@param list} is {@link Recursive} with {@template Value} value
 *
 * {@param validation} is use to validate for {@template Value}
 */

export default function List<
    Value extends Argument,
    Argument extends unknown,
>(
    list : Argument[],
    validation : Guard<Argument,  Value>,
) : list is Value[]

export default function List<
    Assumption extends [],
>(
    list : unknown[],
    validation : Fns<unknown,  boolean>,
) : boolean;

export default function List<
    Assumption extends [],
    >(
    list : unknown[],
    validation : Fns<unknown,  boolean>,
) : boolean {

    for(let value of list) {

        if(validation(value)) {

           continue;
        }

        return false;
    }

    return true;
}
