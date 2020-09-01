import Name from "@dikac/t-object/string/name";
import Sentence from "@dikac/t-string/message/sentence";

/**
 * string intended for not empty array
 *
 * @param valid
 * @param value
 * @param subject
 */

export default function NotEmpty(
    valid : boolean,
    value : any[],
    subject : string = ''
) : string {

    const sentence = new Sentence(valid);
    sentence.expectation = {
        invalid:'is',
        valid:'is not',
    };
    sentence.value = [subject,  Name(value)].join(' ');
    sentence.type = 'empty array';
    return sentence.message;
}
