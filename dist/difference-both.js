import DifferenceLeft from "./difference";
import Equal from "@dikac/t-boolean/equal";
export default function DifferenceBoth(array1, array2, compare = Equal) {
    let left = DifferenceLeft(array1, array2, compare);
    let right = DifferenceLeft(array2, array1, compare);
    return [...new Set([...left, ...right])];
}
//# sourceMappingURL=difference-both.js.map