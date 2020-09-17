export default function And(booleans, defaults = true) {
    if (!booleans.length) {
        return defaults;
    }
    for (let boolean of booleans) {
        if (!boolean) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=and.js.map