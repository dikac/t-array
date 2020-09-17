import EnsureValidatable from "@dikac/t-validatable/ensure/validatable";
import ValidatableValid from "@dikac/t-validatable/boolean/value";
/**
 * filter all valid {@link Validatable}
 */
export default function Valid(list) {
    return list.map((v) => EnsureValidatable(v)).filter(ValidatableValid);
}
//# sourceMappingURL=valid.js.map