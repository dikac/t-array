/**
 * Check if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template Value}
 */
export default function List<Value extends Argument, Argument extends unknown>(list: ReadonlyArray<Argument>, validation: (value: Argument) => value is Value): list is Value[];
export default function List(list: ReadonlyArray<unknown>, validation: (value: unknown) => boolean): boolean;
