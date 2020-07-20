import Validatable from "@dikac/t-validatable/validatable";
// import Record from "../../recursive/recursive";
import Filter from "../../list/filter";
import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import {List} from "ts-toolbelt";

/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<
    Object extends List.List<Validatable>
>(
    record : Object
) : List.Partial<Object> {

    let filter = Filter(record, GuardValidatable, (v : Validatable) => v.valid);
    return <any> filter;
}

