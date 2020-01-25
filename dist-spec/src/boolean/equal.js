"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function Equal(array1, array2, compare = (value1, value2) => value1 === value2) {
    if (array1.length !== array2.length) {
        return false;
    }
    let valids = [];
    PARENT: for (let i in array1) {
        for (let j in array2) {
            if (valids.includes(j)) {
                continue;
            }
            if (compare(array1[i], array2[j])) {
                valids.push(j);
                continue PARENT;
            }
        }
        return false;
    }
    if (array1.length === valids.length) {
        return true;
    }
    return false;
}
exports.default = Equal;
//# sourceMappingURL=equal.js.map