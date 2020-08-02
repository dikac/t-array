import Validatable from "@dikac/t-validatable/validatable";
import Callback from "./callback";
export default function Or<Validatables extends Validatable[]>(validatables: Validatables, defaults?: boolean): Callback<Validatables>;
