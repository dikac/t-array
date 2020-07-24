import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import RecordValidatable from "../../validator/validatable/list/record";
import OptionalValidatable from "../../validator/validatable/list/optional";
import Function from "@dikac/t-function/function";
import ValidatableInterface from "@dikac/t-validatable/validatable";
export declare type ValidationReturn<Val, Container extends Validator<Val>[]> = RecordValidatable<Container> | OptionalValidatable<Container>;
export declare type ValidatorReturn<Val, Container extends Validator[] = Validator[], Result extends ValidatableInterface[] = ValidatableInterface[], Validatable extends ValidatableInterface = ValidatableInterface> = Readonly<{
    validatables: Result;
} & ValidatableInterface & ValueInterface<Val> & {
    validatable: Validatable;
}>;
export default class Value<Val, Container extends Validator[] = Validator[], Result extends ValidatableInterface[] = ValidatableInterface[], Validatable extends ValidatableInterface = ValidatableInterface> implements Validator<Val, ValidatorReturn<Val, Container, Result, Validatable>> {
    validators: Container;
    handler: Function<[Val, Container], Result>;
    validation: Function<[Result], Validatable>;
    constructor(validators: Container, handler: Function<[Val, Container], Result>, validation: Function<[Result], Validatable>);
    validate(value: Val): ValidatorReturn<Val, Container, Result, Validatable>;
}
