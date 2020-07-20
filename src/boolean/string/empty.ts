export default function Empty(
    valid : boolean,
    empty : boolean,
    value : unknown[],
) : string {

    if(empty) {

        if(valid) {

            return `array is empty`;

        } else {

            return `array must empty`;
        }

    } else {

        if(valid) {

            return `array is not empty`;

        } else {

            return `array must not empty`;
        }
    }
}
