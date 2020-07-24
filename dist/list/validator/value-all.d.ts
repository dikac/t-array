import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import RecursiveInferReturn from "../../validatable/list/map";
import Validatables from "../validatable/validatables";
export declare type ValidatorReturn<Val, Container extends Validator[] = Validator[], Validatable extends ValidatableInterface = ValidatableInterface> = Readonly<Validatables<RecursiveInferReturn<Container>> & ValidatableInterface & ValueInterface<Val> & {
    validatable: Validatable;
} & {
    validation: Function<[RecursiveInferReturn<Container>], Validatable>;
}>;
export default class ValueAll<Val, Container extends Validator[] = Validator[], Validatable extends ValidatableInterface = ValidatableInterface> implements Validator<Val, ValidatorReturn<Val, Container, Validatable>> {
    validators: Container;
    validation: Function<[RecursiveInferReturn<Container>], Validatable>;
    constructor(validators: Container, validation: Function<[RecursiveInferReturn<Container>], Validatable>);
    validate(value: Val): ValidatorReturn<Val, Container, Validatable>;
}
