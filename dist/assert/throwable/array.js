import ArrayType from "../string/array";
export default function Array(string, subject = 'type', conversion = value => typeof value) {
    return new Error(ArrayType(false, string, subject, conversion));
}
//# sourceMappingURL=array.js.map