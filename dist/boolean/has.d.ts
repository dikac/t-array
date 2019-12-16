export default function Has<Value>(array: Value[], value: Value, validator: (arrayValue: Value, valueArgument: Value) => boolean, fromIndex?: number): boolean;
