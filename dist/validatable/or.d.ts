import ValidatableInterface from "@dikac/t-validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
export default function Or<Validatables extends ValidatableInterface[]>(validatables: Validatables, defaults?: boolean): Validatables & Readonly<Validatable> & {
    defaults: boolean;
} & Readonly<Value<Validatables>>;
