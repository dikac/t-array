export default function Or(booleans, defaults = true) {
    if (!booleans.length) {
        return defaults;
    }
    let result = false;
    for (let boolean of booleans) {
        result = result || boolean;
        if (boolean) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=or.js.map