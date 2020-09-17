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
export default function Unique(values, compare = Equal) {
    let results = [];
    PARENT: for (let index1 in values) {
        for (let result of results) {
            if (compare(values[index1], result)) {
                continue PARENT;
            }
        }
        results.push(values[index1]);
    }
    return results;
}
//# sourceMappingURL=unique.js.map