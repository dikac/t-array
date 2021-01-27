/**
 * Check if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template Value}
 *
 * @param error
 */
export default function List<Value extends Argument, Argument extends unknown>(list: ReadonlyArray<Argument>, validation: (value: Argument) => value is Value, error: (value: unknown) => Error): Value[];
