import Validator from "@dikac/t-validator/validator";
export default interface Validators<ValidatorsT extends Validator[] = Validator[]> {
    validators: ValidatorsT;
}
