export default function DifferenceBoth<Value>(array1: ReadonlyArray<Value>, array2: ReadonlyArray<Value>, compare?: (value1: Value, value2: Value) => boolean): Value[];
