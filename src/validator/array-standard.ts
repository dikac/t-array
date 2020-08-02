import Array_ from "./array";
import ArrayMessage from "../validatable/string/array";

export default function ArrayStandard() : Array_<string> {

    return new Array_<string>(ArrayMessage)
}
