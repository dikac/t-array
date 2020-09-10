import Sentence from "@dikac/t-string/message/sentence";

export default function Includes(
    valid : boolean,
    subject : string = '',
) : string {

    const sentence = new Sentence(valid);
    sentence.subject = subject;
    sentence.predicate = {
        valid : 'is exists in',
        invalid : 'is not exists in',
    };
    sentence.object = 'array';
    return sentence.message;

}
