import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import RecordParameter from "./parameter/parameter";
import PartialUnion from "../../validator/validatable/list/partial-union";
export declare type ValidatorReturn<Container extends Validator[], Validatable extends ValidatableInterface> = Readonly<{
    validatables: PartialUnion<Container>;
} & ValidatableInterface & ValueInterface<RecordParameter<Container>> & {
    validatable: Validatable;
} & {
    validation: Function<[PartialUnion<Container>], Validatable>;
}>;
export default class Map<Container extends Validator[] = Validator[], Validatable extends ValidatableInterface = ValidatableInterface> implements Validator<RecordParameter<Container>, ValidatorReturn<Container, Validatable>> {
    validators: Container;
    validation: Function<[PartialUnion<Container>], Validatable>;
    constructor(validators: Container, validation: Function<[PartialUnion<Container>], Validatable>);
    validate(value: RecordParameter<Container>): ValidatorReturn<Container, Validatable>;
}
