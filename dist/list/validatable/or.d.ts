import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "./validatables";
export default function Or<Record extends Validatable[]>(validatable: Record): Validatables<Record, boolean>;