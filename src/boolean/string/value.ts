/**
 * {@param valid} type is valid or not
 * {@param property} object property
 * {@param type} expected type
 */
export default function Value(
    valid : boolean,
    property : number,
    type : string
) : string {

    if(valid) {

        return `index "${property}" value is "${type}"`;

    } else {

        return `index "${property}" value is not "${type}"`;
    }
}
