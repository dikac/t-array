export default function NotEmpty(
    valid : boolean,
    value : unknown[],
) : string {

    if(valid) {

        return `array is not empty`;

    } else {

        return `array must not empty`;
    }
}
