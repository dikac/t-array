import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "./validatables";
import { List } from "ts-toolbelt";
export default function Or<Record extends List.Partial<Validatable[]>>(validatable: Record): Validatables<Record, boolean>;
