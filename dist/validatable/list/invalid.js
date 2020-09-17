import EnsureValidatable from "@dikac/t-validatable/ensure/validatable";
import ValidatableInValid from "@dikac/t-validatable/boolean/invalid";
/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid(list) {
    return list.map((v) => EnsureValidatable(v)).filter(ValidatableInValid);
}
//# sourceMappingURL=invalid.js.map