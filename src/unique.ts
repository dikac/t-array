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
    values : Value[],
    compare : (value1 : Value, value2 : Value) => boolean
    = (value1 : Value, value2 : Value) => value1 === value2
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
