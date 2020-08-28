import New from "@dikac/t-function/new";
import ValueMessage from "../../boolean/string/value";

export default function Value(
    index: number,
    error : (message:string)=>Error = New(Error)
) : Error {

    return error(ValueMessage(false, index))
}
