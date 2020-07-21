import Empty from "../../../boolean/empty";
import Invalid from "../invalid";
import Validatable from "@dikac/t-validatable/validatable";

export default function And<
    Object extends Validatable[]
>(object : Object) : boolean {

    let filtered = Invalid(object);

    return Empty(<Object>filtered, true);
}
