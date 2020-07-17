import Validatable from "@dikac/t-validatable/validatable";
import RecursiveRecord from "../../../recursive/recursive";
/**
 * Check if {@param record} is array of {@link Validatable}
 */
export default function Record<Object extends RecursiveRecord<Validatable>>(record: unknown): record is Object;
