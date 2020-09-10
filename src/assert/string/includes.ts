import Sentence from "@dikac/t-string/message/sentence";

export default function Includes(
    valid : boolean,
    subject : string = '',
) : string {

    const sentence = new Sentence(valid);

    sentence.subject = subject;
    sentence.accept =  'is exists in';
    sentence.reject =  'is not exists in';


    sentence.expect = 'array';
    return sentence.message;

}
