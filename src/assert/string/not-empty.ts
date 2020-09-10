import Name from "@dikac/t-object/string/name";
import Sentences from "@dikac/t-string/message/sentences";

/**
 * string intended for not empty array message
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
    sentence.accept = ['is not'];
    sentence.reject = ['is'];
    sentence.subject = [subject,  Name(value)];

    sentence.expect = ['empty array'];
    return sentence.message;
}
