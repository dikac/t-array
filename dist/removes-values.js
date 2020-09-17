import RemovesValue from "./removes-value";
import Equal from "@dikac/t-boolean/equal";
export default function RemovesValues(array, values, validator = Equal, start = 0, end = Infinity, limit = Infinity) {
    let removed = [];
    for (let value of values) {
        let _removed = RemovesValue(array, value, validator, start, end, limit);
        limit = limit - _removed.length;
        removed.push(..._removed);
    }
    return removed;
}
//# sourceMappingURL=removes-values.js.map