/**
 * return all data from targets that does not exists in comparison
 *
 * @param compare
 * @param arrays
 * @constructor
 */
export default function Intersection<Value>(compare?: (target: Value, comparison: Value) => boolean, ...arrays: Value[][]): Value[];
