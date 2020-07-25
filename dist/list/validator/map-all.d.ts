import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import RecursiveInferReturn from "../../validator/validatable/list/list";
import RecordParameter from "./parameter/parameter";
import Validatables from "../validatables/validatables";
export declare type ValidatorReturn<Container extends Validator[], Validatable extends ValidatableInterface> = Readonly<Validatables<RecursiveInferReturn<Container>> & ValidatableInterface & ValueInterface<RecordParameter<Container>> & {
    validatable: Validatable;
} & {
    validation: Function<[RecursiveInferReturn<Container>], Validatable>;
}>;
export default class MapAll<Container extends Validator[] = Validator[], Validatable extends ValidatableInterface = ValidatableInterface> implements Validator<RecordParameter<Container>, ValidatorReturn<Container, Validatable>> {
    validators: Container;
    validation: Function<[RecursiveInferReturn<Container>], Validatable>;
    constructor(validators: Container, validation: Function<[RecursiveInferReturn<Container>], Validatable>);
    validate(value: RecordParameter<Container>): ValidatorReturn<Container, Validatable>;
}
