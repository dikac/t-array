import {List} from "ts-toolbelt";

/**
 * reset array index
 * @param argument
 */
export default function Reset<
    Argument extends unknown[]
>(argument : Argument) : List.UnionOf<List.Required<Argument>>[] {

    const buffer : List.UnionOf<List.Required<Argument>>[] = [];

    argument.forEach(function (v, i) {
        buffer.push(<List.UnionOf<List.Required<Argument>>>v);
    })

    return <List.UnionOf<List.Required<Argument>>[]> buffer;
}
