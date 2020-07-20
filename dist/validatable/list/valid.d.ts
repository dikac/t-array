import Validatable from "@dikac/t-validatable/validatable";
import { List } from "ts-toolbelt";
/**
 * filter all valid {@link Validatable} while retain its original structure
 */
export default function Valid<Object extends List.List<Validatable>>(record: Object): List.Partial<Object>;
