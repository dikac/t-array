/**
 * return all data from targets that does not exists in comparison
 *
 * @param targets
 * @param comparisons
 * @param compare
 * @constructor
 */
export default function DifferenceLeft<Value>(targets: Value[], comparisons: Value[], compare?: (target: Value, comparison: Value) => boolean): Value[];
