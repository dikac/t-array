import Validatable from "@dikac/t-validatable/validatable";
import Filter from "../../list/filter";
import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import {List} from "ts-toolbelt";

/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<
    Object extends List.List<Validatable>
>(
    list : Object
) : List.Partial<Object> {

    let filter = Filter(list, GuardValidatable, (v : Validatable) => v.valid);
    return filter;
}
