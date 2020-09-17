import Equal from "@dikac/t-boolean/equal";
/**
 * get index of first match values
 *
 * @param array
 * @param value
 * @param validator (value : Value, argument : Value) => boolean
 * value : value from array
 * argument : value from argument
 *
 * @param start
 * start of index, 0 mean from beginning
 *
 * @param end
 * end of index, Infinity mean no ending
 *
 * @constructor
 */
export default function Index(array, value, validator = Equal, start = 0, end = Infinity) {
    let direct = array.indexOf(value, start);
    if (direct !== -1) {
        return direct;
    }
    for (let i = start; array[i] !== undefined && i <= end; i++) {
        if (validator(array[i], value)) {
            return i;
        }
    }
    return null;
}
//# sourceMappingURL=index.js.map