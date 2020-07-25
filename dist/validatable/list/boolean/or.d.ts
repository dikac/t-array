import Validatable from "@dikac/t-validatable/validatable";
import { List } from "ts-toolbelt";
export default function Or<Object extends List.Partial<Validatable[]>>(object: Object): boolean;
