import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import RecordParameter from "./parameter/parameter";
import RecordValidatable from "../../validator/validatable/list/record";
import OptionalInferReturn from "../../validator/validatable/list/optional";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validators from "../validators/validators";
export declare type ValidationReturn<Container extends Validator<RecordParameter<Container>>[]> = RecordValidatable<Container> | OptionalInferReturn<Container>;
export declare type ValidatorReturn<Container extends Validator<RecordParameter<Container>>[], Result extends ValidatableInterface[], Validatable extends ValidatableInterface> = Readonly<ValueInterface<RecordParameter<Container>> & ValidatableInterface & {
    validatables: Result;
} & {
    validatable: Validatable;
}>;
export default class Map<Container extends Validator[] = Validator[], Result extends ValidatableInterface[] = ValidatableInterface[], Validatable extends ValidatableInterface = ValidatableInterface> implements Validator<RecordParameter<Container>, ValidatorReturn<Container, Result, Validatable>>, Validators<Container> {
    validators: Container;
    handler: Function<[RecordParameter<Container>, Container], Result>;
    validation: Function<[Result], Validatable>;
    constructor(validators: Container, handler: Function<[RecordParameter<Container>, Container], Result>, validation: Function<[Result], Validatable>);
    validate(argument: RecordParameter<Container>): ValidatorReturn<Container, Result, Validatable>;
}
