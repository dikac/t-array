import Name from "@dikac/t-object/string/name";
import SentencesMust from "@dikac/t-string/message/sentences-must";
/**
 * string intended for empty array
 *
 * @param valid
 * @param value
 * @param subject
 */
export default function Empty(valid, value, subject = '') {
    const sentence = SentencesMust(valid);
    sentence.subject = [subject, `"${Name(value)}"`];
    sentence.expect = ['empty array'];
    return sentence.message;
}
//# sourceMappingURL=empty.js.map