import Equal from "@dikac/t-boolean/equal";

/**
 * pick a duplicate value from {@param values}
 *
 * @param values
 *
 * @param compare
 * to compare value equality
 *
 */
export default function Duplicate<Value>(
    values : ReadonlyArray<Value>,
    compare : (value1 : Value, value2 : Value) => boolean = Equal
) : Value[] {

    let duplicates : Value[] = [];

    for(let [index1, value1] of values.entries()) {

        for(let [index2, value2] of values.entries()) {

            if(index1 === index2) {

                continue;
            }

            if(compare(value1, value2)) {

                duplicates.push(value1);
                break;
            }
        }
    }

    return duplicates;
}
