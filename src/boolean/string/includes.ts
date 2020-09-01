import Sentence from "@dikac/t-string/message/sentence";
import Name from "@dikac/t-object/string/name";

export default function Includes(
    valid : boolean,
    subject : string = '',
) : string {

    const sentence = new Sentence(valid);
    sentence.value = subject;
    sentence.expectation = {
        valid : 'is exists in',
        invalid : 'is not exists in',
    };
    sentence.type = 'array';
    return sentence.message;

}
