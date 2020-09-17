import IterableAnd from "@dikac/t-iterable/validatable/boolean/and";
import Callback from "./callback";
export default function And(validatables, defaults = true) {
    return new Callback(validatables, (v) => IterableAnd(v, defaults));
}
//# sourceMappingURL=and.js.map