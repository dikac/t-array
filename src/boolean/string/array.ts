import Sentence from "@dikac/t-message/sentence";

const sentence = new Sentence(
    false,
    '',
    {
        invalid:'is not',
        valid:'is',
    }, 'array'
);

export default function Array(
    valid : boolean,
    subject : string = ''
) : string {

    sentence.subject = subject;
    sentence.valid = valid;
    return sentence.message;
}
