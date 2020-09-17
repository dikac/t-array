/**
 * Check if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template Value}
 */
export default function List(list, validation) {
    for (let value of list) {
        if (validation(value)) {
            continue;
        }
        return false;
    }
    return true;
}
//# sourceMappingURL=list.js.map