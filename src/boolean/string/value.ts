/**
 * {@param valid} type is valid or not
 * {@param index} object property
 * {@param type} expected type
 */
export default function Value(
    valid : boolean,
    index : number,
    type : string
) : string {

    if(valid) {

        return `index "${index}" value is "${type}"`;

    } else {

        return `index "${index}" value is not "${type}"`;
    }
}
