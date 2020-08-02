import Validatable from "@dikac/t-validatable/validatable";
import {List} from "ts-toolbelt";
import EnsureValidatable from "@dikac/t-validatable/ensure/validatable";
import ValidatableInValid from "@dikac/t-validatable/boolean/invalid";

/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<
    Object extends Validatable[] = Validatable[]
>(
    list : Object
) : List.UnionOf<Object>[]|Object {

    return  list.map((v)=>EnsureValidatable(v)).filter(ValidatableInValid);
}
