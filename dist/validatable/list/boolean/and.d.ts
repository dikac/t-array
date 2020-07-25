import Validatable from "@dikac/t-validatable/validatable";
import { List } from "ts-toolbelt";
export default function And<Object extends List.Partial<Validatable[]>>(object: Object): boolean;
