import AssertArray from "../assert/array";
import ArrayError from "../assert/throwable/array";
export default function Array(value, error = ArrayError) {
    AssertArray(value, error);
    return value;
}
//# sourceMappingURL=array.js.map