import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import { List } from "ts-toolbelt";
import RecursiveInferReturn from "../../validatable/list/map";
import RecordParameter from "./parameter/parameter";
export declare type Return<Validators extends Validator[]> = List.Partial<RecursiveInferReturn<Validators>> | List.UnionOf<RecursiveInferReturn<Validators>>[] | RecursiveInferReturn<Validators>;
export declare type ValidatorReturn<Container extends Validator[], Validatable extends ValidatableInterface> = Readonly<{
    validatables: Return<Container>;
} & ValidatableInterface & ValueInterface<RecordParameter<Container>> & {
    validatable: Validatable;
} & {
    validation: Function<[Return<Container>], Validatable>;
}>;
export default class Map<Container extends Validator[] = Validator[], Validatable extends ValidatableInterface = ValidatableInterface> implements Validator<RecordParameter<Container>, ValidatorReturn<Container, Validatable>> {
    validators: Container;
    validation: Function<[Return<Container>], Validatable>;
    constructor(validators: Container, validation: Function<[Return<Container>], Validatable>);
    validate(value: RecordParameter<Container>): ValidatorReturn<Container, Validatable>;
}
