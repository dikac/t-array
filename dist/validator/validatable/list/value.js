export default function Value(value, validators) {
    const result = [];
    for (const [property, validator] of validators.entries()) {
        const validatable = validator.validate(value);
        result[property] = validatable;
    }
    return result;
}
//# sourceMappingURL=value.js.map