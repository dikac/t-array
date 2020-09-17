import Guard from "../boolean/array";
import Callback from "@dikac/t-function/assert/callback";
import ArrayError from "./throwable/array";
export default function Array(value, error = ArrayError) {
    Callback(value, Guard, error);
}
//# sourceMappingURL=array.js.map