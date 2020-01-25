/**
 * return data from the first array which exists in all array
 *
 * @param compare
 * @param arrays
 * @constructor
 */
export default function Intersection<Value>(compare?: (target: Value, comparison: Value) => boolean, ...arrays: Value[][]): Value[];
