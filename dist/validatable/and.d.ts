import ValidatableInterface from "@dikac/t-validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
export default function And<Validatables extends ValidatableInterface[]>(validatables: Validatables, defaults?: boolean): Validatables & Readonly<Validatable> & {
    defaults: boolean;
};
