import Validatable from "@dikac/t-validatable/validatable";
import RecursiveInferReturn from "./validatable/recursive/recursive";
import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
export default class Value<Val, Container extends Validator<Val>[]> implements Validator<Val, RecursiveInferReturn<Container> & Validatable & ValueInterface<Val>> {
    validators: Container;
    defaults: boolean;
    constructor(validators: Container, defaults?: boolean);
    validate(value: Val): RecursiveInferReturn<Container> & Validatable & ValueInterface<Val>;
}
