import Validatable from "@dikac/t-validatable/validatable";
import { List } from "ts-toolbelt";
/**
 * filter all invalid {@link Validatable} while retain its original structure
 */
export default function Invalid<Object extends Validatable[] = Validatable[]>(list: Object): List.UnionOf<Object>[] | Object;
