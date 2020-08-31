import Sentence from "@dikac/t-message/sentence";
import Name from "@dikac/t-object/string/name";

const sentence = new Sentence(
    false,
    '',
    {
        valid : 'is',
        invalid : 'is not',
    }, 'empty array'
);

/**
 * string intended for empty array
 *
 * @param valid
 * @param value
 */

export default function Empty(valid : boolean, value : unknown[]) : string {

    sentence.subject = '"' + Name(value) + '"';
    sentence.valid = valid;
    return sentence.message;
}
