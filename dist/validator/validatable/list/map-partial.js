export default function Map(values, validators, stop = false) {
    const result = [];
    for (let [property, validator] of validators.entries()) {
        const value = values[property];
        const validatable = validator.validate(value);
        result[property] = validatable;
        if (validatable.valid === stop) {
            return result;
        }
    }
    return result;
}
//# sourceMappingURL=map-partial.js.map