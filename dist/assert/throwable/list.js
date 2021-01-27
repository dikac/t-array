import ListType from "../string/list";
export default function Array(string, expect, subject = 'type', conversion = value => typeof value) {
    return new Error(ListType(false, expect, string, subject, conversion));
}
//# sourceMappingURL=list.js.map