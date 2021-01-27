import SentencesMust from "@dikac/t-string/message/sentences-must";

export default function List(
    valid : boolean,
    expect : string,
    value : unknown,
    subject : string = 'type',
    conversion : (value:unknown)=>string = value=>typeof value
) : string {

    let sentence = SentencesMust(valid);
    sentence.expect.push('array');
    sentence.expect.push('of');
    sentence.expect.push(expect);
    sentence.subject.push(subject);

    sentence.comma.push('expect');

    if(!valid) {

        sentence.actual.push('actual', conversion(value));
    }

    return sentence.message;
}
