import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import PartialUnion from "../../validator/validatable/list/partial-union";
export declare type ValidatorReturn<Val, Container extends Validator[] = Validator[], Validatable extends ValidatableInterface = ValidatableInterface> = Readonly<{
    validatables: PartialUnion<Container>;
} & ValidatableInterface & ValueInterface<Val> & {
    validatable: Validatable;
} & {
    validation: Function<[PartialUnion<Container>], Validatable>;
}>;
export default class Value<Val, Container extends Validator[] = Validator[], Validatable extends ValidatableInterface = ValidatableInterface> implements Validator<Val, ValidatorReturn<Val, Container, Validatable>> {
    validators: Container;
    validation: Function<[PartialUnion<Container>], Validatable>;
    constructor(validators: Container, validation: Function<[PartialUnion<Container>], Validatable>);
    validate(value: Val): ValidatorReturn<Val, Container, Validatable>;
}
