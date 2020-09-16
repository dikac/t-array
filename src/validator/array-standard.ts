import Array_ from "./array";
import ArrayMessage from "../validatable/string/array";

/**
 * create {@see Array} with default message
 */
export default function ArrayStandard() : Array_<string> {

    return new Array_<string>(ArrayMessage)
}
