import DifferenceLeft from "./difference";
import Equal from "@dikac/t-boolean/equal";

export default function DifferenceBoth<Value>(
    array1: ReadonlyArray<Value>,
    array2 : ReadonlyArray<Value>,
    compare : (value1 : Value, value2 : Value) => boolean = Equal
) : Value[] {

    let left = DifferenceLeft(array1, array2, compare);
    let right = DifferenceLeft(array2, array1, compare);

    return [... new Set<Value>([...left, ...right])]
}
