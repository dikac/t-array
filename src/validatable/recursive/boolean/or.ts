import Record from "../../../recursive/recursive";
import Valid from "../valid";
import Validatable from "@dikac/t-validatable/validatable";
import Empty from "../../../boolean/empty";

export default function Or<
    Object extends Record<Validatable>
>(object : Object) : boolean {

    let filtered = Valid(object);

    return !Empty(<Object>filtered, true);
}
