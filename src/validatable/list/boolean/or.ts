import Valid from "../valid";
import Validatable from "@dikac/t-validatable/validatable";
import Empty from "../../../boolean/empty";
import {List} from "ts-toolbelt";

export default function Or<
    Object extends List.Partial<Validatable[]>
>(object : Object) : boolean {

    let filtered = Valid(object);

    return !Empty(filtered);
}
