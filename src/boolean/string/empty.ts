import Name from "@dikac/t-object/string/name";
import SentencesIs from "@dikac/t-string/message/sentences-is";

/**
 * string intended for empty array
 *
 * @param valid
 * @param value
 * @param subject
 */

export default function Empty(
    valid : boolean,
    value : unknown[],
    subject : string = ''
) : string {

    const sentence = SentencesIs(valid);
    sentence.subject = [subject,  Name(value)];
    sentence.object = ['empty array'];
    return sentence.message;
}
