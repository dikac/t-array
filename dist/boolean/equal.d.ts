import Function from "@dikac/t-function/function";
export default function Equal<Value>(array1: Value[], array2: Value[], compare?: Function<[Value, Value], boolean>): boolean;
