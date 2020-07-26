import Empty from "../../../boolean/empty";
import Invalid from "../invalid";
import Validatable from "@dikac/t-validatable/validatable";
import {List} from "ts-toolbelt";

export default function And<
    Object extends List.Partial<Validatable[]>
>(object : Object) : boolean {

    let filtered = Invalid(object);

    return Empty(filtered);
}
