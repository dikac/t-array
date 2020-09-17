import Extract from "./value/value/extract";
import Index from "./number";
import Equal from "@dikac/t-boolean/equal";
export default function RemovesValue(array, value, validator = Equal, start = 0, end = Infinity, limit = Infinity) {
    let removed = [];
    while (limit > 0) {
        let index = Index(array, value, validator, start, end);
        if (index !== null) {
            let value = Extract(array, index);
            if (value === undefined) {
                throw new Error('TODO');
            }
            removed.push(value);
            limit--;
        }
        else {
            break;
        }
    }
    return removed;
}
//# sourceMappingURL=removes-value.js.map