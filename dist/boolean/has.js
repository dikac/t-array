import Index from "../number";
import Equal from "@dikac/t-boolean/equal";
export default function Has(array, compare, validator = Equal, fromIndex = 0) {
    return Index(array, compare, validator, fromIndex) !== null;
}
//# sourceMappingURL=has.js.map