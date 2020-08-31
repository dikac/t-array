import Sentence from "@dikac/t-message/sentence";

const sentence = new Sentence(
    false,
    '',
    {
        valid : 'is exists in',
        invalid : 'is not exists in',
    }, 'array'
);


export default function Includes<Type>(
    valid : boolean,
    subject : string = '',
) : string {

    sentence.subject = subject;
    sentence.valid = valid;

    return sentence.message;
}
