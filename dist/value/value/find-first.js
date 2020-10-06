import Equal from "@dikac/t-boolean/equal";
/**
 *
 * @param argument
 * @constructor
 */
export default function FindFirst(argument) {
    let validation = argument.validation || Equal;
    for (let value of argument.value) {
        if (validation(value, argument.compare)) {
            return value;
        }
    }
    return argument.default;
}
//# sourceMappingURL=find-first.js.map