import Validatable from "@dikac/t-validatable/validatable";

export default interface Validatables<
    Record extends Validatable[] = Validatable[]
> {

    validatables : Record;
}
