export default function Indexes<Value>(array: ReadonlyArray<Value>, value: Value, validator?: (value: Value, argument: Value) => boolean, start?: number, end?: number): number[];
