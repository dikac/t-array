import Validatable from "@dikac/t-validatable/validatable";
export default function And<Validatables extends Validatable[]>(validatables: Validatables, defaults?: boolean): boolean;
