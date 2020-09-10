import ArrayType from "../string/array";

export default function Array(
    string : unknown[],
    subject : string = 'type',
    conversion : (value: unknown[])=>string = value=>typeof value
) : Error {

    return new Error(ArrayType(false, string, subject, conversion))
}
