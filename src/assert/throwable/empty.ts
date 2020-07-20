import EmptyType from "../../boolean/string/empty";

export default function Empty(empty : boolean, string : unknown[]) : Error {

    return new Error(EmptyType(false, empty, string))
}
