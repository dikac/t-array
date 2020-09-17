export default function Or(value, validators) {
    for (let validator of validators) {
        if (validator(value)) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=or.js.map