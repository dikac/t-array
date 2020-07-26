import EmptyType from "../../boolean/string/empty";

export default function Empty(string : unknown[]) : Error {

    return new Error(EmptyType(false, string))
}
