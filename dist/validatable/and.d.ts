import Validatable from "@dikac/t-validatable/validatable";
import Callback from "./callback";
export default function And<Validatables extends Validatable[]>(validatables: Validatables, defaults?: boolean): Callback<Validatables>;
