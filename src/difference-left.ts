/**
 * return all data from targets that does not exists in comparison
 *
 * @param targets
 * @param comparisons
 * @param compare
 * @constructor
 */
export default function DifferenceLeft<Value>(
    targets: Value[],
    comparisons : Value[],
    compare : (target : Value, comparison : Value) => boolean
        = (target : Value, comparison : Value) => target === comparison
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