export default function Empty(
    valid : boolean,
    value : unknown[],
) : string {

    if(valid) {

        return `array is empty`;

    } else {

        return `array must empty`;
    }
}
