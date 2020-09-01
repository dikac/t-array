import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import ArrayMessage from "../../boolean/string/array";

export default function Array(object : Readonly<Validatable & Value>) : string {

    return ArrayMessage(object.valid, object.value)
}
