/**
 * pick a unique value from {@param values}
 *
 * @param values
 *
 * @param compare
 * to compare value equality
 *
 */
export default function Unique<Value>(values: ReadonlyArray<Value>, compare?: (value1: Value, value2: Value) => boolean): Value[];
