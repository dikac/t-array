// import Record from "../../../recursive/recursive";
import Empty from "../../../boolean/empty";
import Invalid from "../invalid";
import Validatable from "@dikac/t-validatable/validatable";

export default function And<
    Object extends Validatable[]//Record<Validatable>
>(object : Object) : boolean {

    let filtered = Invalid(object);

    return Empty(<Object>filtered, true);
}
