import PropertyValueMessage from "../../boolean/string/value";

export default function Value(property : number, type : string) : Error {

    return new Error(PropertyValueMessage(false, property, type))
}
