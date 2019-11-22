/**
 * get index of first match values
 *
 * @param array
 * @param value
 * @param validator (value : Value, argument : Value) => boolean
 * value : value from array
 * argument : value from argument
 *
 * @param start
 * start of index, 0 mean from beginning
 *
 * @param end
 * end of index, Infinity mean no ending
 *
 * @constructor
 */
export default function Index<Value = any>(array: Value[], value: Value, validator?: (value: Value, argument: Value) => boolean, start?: number, end?: number): number | null;
