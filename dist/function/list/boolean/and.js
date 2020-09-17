export default function And(value, validations) {
    for (let validator of validations) {
        if (!validator(value)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=and.js.map