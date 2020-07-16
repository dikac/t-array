import PropertyValueMessage from "../../boolean/string/value";

export default function Value(index : number, type : string) : Error {

    return new Error(PropertyValueMessage(false, index, type))
}
