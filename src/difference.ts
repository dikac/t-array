import Equal from "@dikac/t-boolean/equal";

/**
 * return all data from targets that does not exists in comparison
 *
 * @param targets
 * @param comparisons
 * @param compare
 * @constructor
 */
export default function Difference<Value>(
    targets: ReadonlyArray<Value>,
    comparisons : ReadonlyArray<Value>,
    compare : (target : Value, comparison : Value) => boolean = Equal
) : Value[] {
    let results : Value[] = [];

    TARGET : for(let target of targets) {

        for(let comparison of comparisons) {

            if(compare(target, comparison)) {

                continue TARGET;
            }
        }

        results.push(target);
    }

    return results;
}
