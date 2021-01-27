import Callback from "@dikac/t-function/assert/callback";
import Guard from "../boolean/list";
/**
 * assert if {@param list} is list of {@template Value}
 *
 * {@param validation} is use to validate for {@template list}
 *
 * @param error
 */
export default function List(list, validation, error) {
    Callback(list, (value) => Guard(value, validation), error);
}
//# sourceMappingURL=list.js.map