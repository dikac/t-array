import Validatable from "@dikac/t-validatable/validatable";
import Filter from "../../list/filter";
import GuardValidatable from "@dikac/t-validatable/boolean/validatable";
import {O} from "ts-toolbelt";

/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<
    V extends Validatable = Validatable,
    Object extends V[] = V[]
>(
    record : Object
) : O.Partial<Object, 'deep'> {

    return Filter(record, GuardValidatable, (v : Validatable) => !v.valid);
}
