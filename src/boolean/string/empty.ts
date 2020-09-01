import Name from "@dikac/t-object/string/name";
import Sentence from "@dikac/t-string/message/sentence";

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

    const sentence = new Sentence(valid);
    sentence.value = [subject,  Name(value)].join(' ');
    sentence.type = 'empty array';
    return sentence.message;
}
