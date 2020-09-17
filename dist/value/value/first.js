/**
 * get the first non 'undefined' value
 *
 * @param values
 */
export default function First(values) {
    let first = values[0];
    if (first === undefined) {
        for (const value of values) {
            if (value !== undefined) {
                return value;
            }
        }
    }
    return first;
}
//# sourceMappingURL=first.js.map