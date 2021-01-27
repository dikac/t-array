import ListType from "../string/list";

export default function Array(
    string : unknown,
    expect : string,
    subject : string = 'type',
    conversion : (value: unknown)=>string = value=>typeof value
) : Error {

    return new Error(ListType(false, expect, string, subject, conversion))
}
