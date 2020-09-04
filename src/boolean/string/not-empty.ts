import Name from "@dikac/t-object/string/name";
import Sentences from "@dikac/t-string/message/sentences";

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

    const sentence = new Sentences(valid);
    sentence.predicate = {
        invalid:['is'],
        valid:['is not'],
    };
    sentence.subject = [subject,  Name(value)];
    sentence.object = ['empty array'];
    return sentence.message;
}
