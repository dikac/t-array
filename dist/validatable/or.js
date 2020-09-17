import IterableOr from "@dikac/t-iterable/validatable/boolean/or";
import Callback from "./callback";
export default function Or(validatables, defaults = true) {
    return new Callback(validatables, (v) => IterableOr(v, defaults));
}
//# sourceMappingURL=or.js.map