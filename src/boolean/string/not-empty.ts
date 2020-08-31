import Sentence from "@dikac/t-message/sentence";
import Name from "@dikac/t-object/string/name";

const sentence = new Sentence(
    false,
    '',
    {
        invalid:'is',
        valid:'is not',
    }, 'empty array'
);

/**
 * string intended for not empty array
 *
 * @param valid
 * @param value
 */

export default function NotEmpty(valid : boolean, value : any[]) : string {

    sentence.subject = '"' + Name(value) + '"';
    sentence.valid = valid;
    return sentence.message;
}
