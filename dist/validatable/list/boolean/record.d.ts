import Validatable from "@dikac/t-validatable/validatable";
/**
 * Check if {@param record} is array of {@link Validatable}
 */
export default function Record<Object extends Validatable[]>(record: unknown): record is Object;
