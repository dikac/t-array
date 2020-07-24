import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import RecordParameter from "../../list/validator/parameter/parameter";
import RecordValidatable from "../../validator/validatable/list/record";
import OptionalInferReturn from "../../validator/validatable/list/optional";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validators from "../validators/validators";
import Validatable from "@dikac/t-validatable/validatable";
interface Interface<Result> {
    validatables: Result;
    validatable: Validatable;
}
export declare type ValidationReturn<Container extends Validator<RecordParameter<Container>>[]> = RecordValidatable<Container> | OptionalInferReturn<Container>;
export default class Map<Container extends Validator[] = Validator[], Result extends ValidatableInterface[] = ValidatableInterface[], Validatable extends ValidatableInterface = ValidatableInterface> implements Validators<Container>, ValueInterface<RecordParameter<Container>>, ValidatableInterface, Interface<Result> {
    readonly value: RecordParameter<Container>;
    readonly validators: Container;
    readonly handler: Function<[RecordParameter<Container>, Container], Result>;
    readonly validation: Function<[Result], Validatable>;
    readonly validatables: Result;
    readonly validatable: Validatable;
    readonly valid: boolean;
    constructor(value: RecordParameter<Container>, validators: Container, handler: Function<[RecordParameter<Container>, Container], Result>, validation: Function<[Result], Validatable>);
}
export {};
