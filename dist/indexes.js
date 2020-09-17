import Equal from "@dikac/t-boolean/equal";
export default function Indexes(array, value, validator = Equal, start = 0, end = Infinity) {
    let indexes = [];
    for (let i = start; array[i] !== undefined && i <= end; i++) {
        if (validator(array[i], value)) {
            indexes.push(i);
        }
    }
    return indexes;
}
//# sourceMappingURL=indexes.js.map