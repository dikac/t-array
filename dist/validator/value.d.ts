import Validatable from "@dikac/t-validatable/validatable";
import RecursiveInferReturn from "./validatable/recursive/recursive";
import Validator from "@dikac/t-validator/validator";
export default class Array<Val, Container extends Validator<Val>[]> implements Validator<Val, RecursiveInferReturn<Container> & Validatable> {
    validators: Container;
    constructor(validators: Container);
    validate(value: Val): RecursiveInferReturn<Container> & Validatable;
}
