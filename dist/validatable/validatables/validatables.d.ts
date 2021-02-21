import Validatable from "@dikac/t-validatable/validatable";
export default interface Validatables<ValidatablesT extends ReadonlyArray<Validatable> = ReadonlyArray<Validatable>> {
    validatables: ValidatablesT;
}
