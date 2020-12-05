export default function Has<Value>(array: ReadonlyArray<Value>, compare: Value, validator?: (value: Value, compare: Value) => boolean, fromIndex?: number): boolean;
