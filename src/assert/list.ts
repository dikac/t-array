import Callback from "@dikac/t-function/assert/callback";
import Guard from "../boolean/list";

/**
 * assert if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template list}
 *
 * @param error
 */

export default function List<
    Value extends Argument,
    Argument extends unknown,
>(
    list : ReadonlyArray<Argument>,
    validation : (value:Argument)=>value is Value,
    error : (value:unknown)=>Error
) : asserts list is Value[] {

    Callback(list, (value : ReadonlyArray<Argument>)=>Guard(value, validation), error);
}
