import RecordInterface from "../recursive";
import Guard from "@dikac/t-function/boolean/guard";
/**
 * Check if {@param record} is {@link Recursive} with {@template Value} value
 *
 * {@param validation} is use to validate for {@template Value}
 */
export default function Guards<Value, Assumption extends RecordInterface<Value>>(record: unknown, validation: Guard<unknown, Value>): record is Assumption;
