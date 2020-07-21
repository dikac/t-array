import Valid from "../valid";
import Validatable from "@dikac/t-validatable/validatable";
import Empty from "../../../boolean/empty";

export default function Or<
    Object extends Validatable[]
>(object : Object) : boolean {

    let filtered = Valid(object);

    return !Empty(filtered, true);
}
