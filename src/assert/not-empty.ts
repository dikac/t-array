import Guard from "../boolean/not-empty";
import Callback from "@dikac/t-function/assert/callback";
import EmptyError from "./throwable/not-empty";

export default function NotEmpty(
    value : unknown[],
    error : (value:unknown[])=>Error = EmptyError
) : asserts value is Array<unknown> {

    Callback(value, Guard, error);
}
