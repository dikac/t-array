import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Validators from "../validators/validators";
export default class ValueCallback<Val, Container extends Validator[] = Validator[], Result extends ValidatableInterface[] = ValidatableInterface[], Validatable extends ValidatableInterface = ValidatableInterface> implements Readonly<ValueInterface<Val> & ValidatableInterface & Validators<Container>> {
    readonly value: Val;
    readonly validators: Container;
    readonly handler: Function<[Val, Container], Result>;
    readonly validation: Function<[Result], Validatable>;
    readonly validatable: any;
    readonly valid: any;
    readonly validatables: Result;
    constructor(value: Val, validators: Container, handler: Function<[Val, Container], Result>, validation: Function<[Result], Validatable>);
}
