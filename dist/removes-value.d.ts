export default function RemovesValue<Value = any>(array: Value[], value: Value, validator?: (arrayValue: Value, valueArgument: Value) => boolean, start?: number, end?: number, limit?: number): Value[];
