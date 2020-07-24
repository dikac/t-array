import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import { List } from "ts-toolbelt";
import RecursiveInferReturn from "../../validatable/list/map";
export declare type Return<Validators extends Validator[] = Validator[]> = List.Partial<RecursiveInferReturn<Validators>> | List.UnionOf<RecursiveInferReturn<Validators>>[] | RecursiveInferReturn<Validators>;
export declare type ValidatorReturn<Val, Container extends Validator[] = Validator[], Validatable extends ValidatableInterface = ValidatableInterface> = Readonly<{
    validatables: Return<Container>;
} & ValidatableInterface & ValueInterface<Val> & {
    validatable: Validatable;
} & {
    validation: Function<[Return<Container>], Validatable>;
}>;
export default class Value<Val, Container extends Validator[] = Validator[], Validatable extends ValidatableInterface = ValidatableInterface> implements Validator<Val, ValidatorReturn<Val, Container, Validatable>> {
    validators: Container;
    validation: Function<[Return<Container>], Validatable>;
    constructor(validators: Container, validation: Function<[Return<Container>], Validatable>);
    validate(value: Val): ValidatorReturn<Val, Container, Validatable>;
}
