import AssertArray from "../assert/array";
import ArrayError from "../assert/throwable/array";

export default function Array(
    value : unknown,
    error : (value:unknown)=>Error = ArrayError
) : unknown[] {

    AssertArray(value, error);

    return value;
}
