export default function Includes<Type>(
    valid : boolean,
    value : Type,
    trues : Type[],
    falses : Type[],
) : string {

    if(valid) {

        return `value is exists in entries`;

    } else {

        return `value is not exists in entries`;
    }
}
