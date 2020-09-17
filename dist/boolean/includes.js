import StringIncludes from "./string/includes";
import Equal from "@dikac/t-boolean/equal";
export default function Includes(value, trues, falses, defaults = (value, trues, falses) => { throw new Error(StringIncludes(false)); }, compare = Equal) {
    for (const val of trues) {
        if (compare(value, val)) {
            return true;
        }
    }
    for (const val of falses) {
        if (compare(value, val)) {
            return false;
        }
    }
    return defaults(value, trues, falses);
}
//# sourceMappingURL=includes.js.map