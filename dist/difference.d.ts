/**
 * return all data from targets that does not exists in comparison
 *
 * @param targets
 * @param comparisons
 * @param compare
 * @constructor
 */
export default function Difference<Value>(targets: ReadonlyArray<Value>, comparisons: ReadonlyArray<Value>, compare?: (target: Value, comparison: Value) => boolean): Value[];
