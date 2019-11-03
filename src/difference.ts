export default function Difference<Value>(
    targets: Value[],
    comparisons : Value[],
    compare : (target : Value, comparison : Value) => boolean
        = (target : Value, comparison : Value) => target === comparison
) {
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