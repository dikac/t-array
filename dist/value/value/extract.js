/**
 * get and remove selected value
 *
 * @param array
 * @param index
 * if negative will start at the end
 *
 */
export default function Extract(array, index) {
    return array.splice(index, 1)[0];
}
//# sourceMappingURL=extract.js.map