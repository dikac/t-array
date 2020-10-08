import Equal from "@dikac/t-boolean/equal";

/**
 * pick a unique value from {@param values}
 *
 * @param values
 *
 * @param compare
 * to compare value equality
 *
 */
export default function Unique<Value>(
    values : ReadonlyArray<Value>,
    compare : (value1 : Value, value2 : Value) => boolean = Equal
) : Value[] {

    let results : Value[] = [];

    PARENT: for(let index1 in values) {

        for(let result of results) {

            if(compare(values[index1], result)) {

                continue PARENT;
            }
        }

        results.push(values[index1]);
    }

    return results;
}
