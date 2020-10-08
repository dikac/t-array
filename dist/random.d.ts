/**
 * pick a random values
 *
 * @param array
 * @param random
 */
export default function Random<Value>(array: ReadonlyArray<Value>, random?: () => boolean): Value[];
