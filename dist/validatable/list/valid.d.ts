import Validatable from "@dikac/t-validatable/validatable";
import { List } from "ts-toolbelt";
/**
 * filter all valid {@link Validatable}
 */
export default function Valid<Object extends Validatable[] = Validatable[]>(list: Object): List.UnionOf<Object>[] | Object;
