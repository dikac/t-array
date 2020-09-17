/**
 * get the last non 'undefined' value
 *
 * @param value
 */
export default function Last(value) {
    let last = value[value.length - 1];
    if (last === undefined) {
        let clone = value.slice(0);
        do {
            last = clone.pop();
        } while (last === undefined && clone.length);
    }
    return last;
}
//# sourceMappingURL=last.js.map