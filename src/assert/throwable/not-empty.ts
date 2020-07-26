import NotEmptyType from "../../boolean/string/not-empty";

export default function NotEmpty(string : unknown[]) : Error {

    return new Error(NotEmptyType(false, string))
}
