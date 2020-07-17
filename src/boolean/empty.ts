export default function Empty(array : unknown[], empty : boolean = true) : boolean {

    return (array.length === 0) === empty;
}
