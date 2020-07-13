import Function from "@dikac/t-function/function";
export default function Has<Value>(array: Value[], compare: Value, validator?: Function<[Value, Value], boolean>, fromIndex?: number): boolean;
