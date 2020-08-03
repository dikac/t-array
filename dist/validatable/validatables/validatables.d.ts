import Validatable from "@dikac/t-validatable/validatable";
export default interface Validatables<ValidatablesT extends Validatable[] = Validatable[]> {
    validatables: ValidatablesT;
}
