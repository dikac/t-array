import Validatable from "@dikac/t-validatable/validatable";
/**
 * Check if {@param list} is array of {@link Validatable}
 */
export default function Record<Object extends Validatable[]>(list: unknown): list is Object;
