import Validatable from "@dikac/t-validatable/validatable";
import Record from "../../recursive/recursive";
import Filter from "../../recursive/filter";
import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import {O} from "ts-toolbelt";

/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<
    V extends Validatable = Validatable,
     Object extends Record<V> = Record<V>
>(
    record : Object
) : O.Partial<Object, 'deep'> {

    return Filter(record, GuardValidatable, (v : Validatable) => v.valid);

}

