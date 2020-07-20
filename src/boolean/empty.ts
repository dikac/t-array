export default function Empty(array : ReadonlyArray<unknown>, empty : boolean = true) : boolean {

    return (array.length === 0) === empty;
}
