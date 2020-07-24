import Validator from "@dikac/t-validator/validator";
export default interface Validators<Record extends Validator[] = Validator[]> {
    validators: Record;
}
