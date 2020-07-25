import Validatable from "@dikac/t-validatable/validatable";
import { List } from "ts-toolbelt";
/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<Object extends List.Partial<Validatable[]> = List.Partial<Validatable[]>>(list: Object): List.Partial<Object>;
