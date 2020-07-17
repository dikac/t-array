import Validatable from "@dikac/t-validatable/validatable";
export default function Or<Validatables extends Validatable[]>(validatables: Validatables, defaults?: boolean): boolean;
