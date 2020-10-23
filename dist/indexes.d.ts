export default function Indexes<Value, Compare>(array: ReadonlyArray<Value>, value: Compare, validator?: (value: Value, argument: Compare) => boolean, start?: number, end?: number): number[];
