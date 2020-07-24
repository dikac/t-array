import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import RecordParameter from "./parameter/parameter";
import RecordValidatable from "../../validator/validatable/list/record";
import OptionalInferReturn from "../../validator/validatable/list/optional";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validators from "../validators/validators";
import ValidatableMap from "../validatable/map";

export type ValidationReturn<
    Container extends Validator<RecordParameter<Container>>[]
> = RecordValidatable<Container>|OptionalInferReturn<Container>;

export type ValidatorReturn<
    Container extends Validator<RecordParameter<Container>>[],
    Result extends ValidatableInterface[],
    Validatable extends ValidatableInterface
> =  Readonly<ValueInterface<RecordParameter<Container>> & ValidatableInterface & {validatables:Result} & {validatable : Validatable}>;

export default class Map<
    Container extends Validator[] = Validator[],
    Result extends ValidatableInterface[] = ValidatableInterface[],
    Validatable extends ValidatableInterface = ValidatableInterface
> implements Validator<
    RecordParameter<Container>,
    ValidatorReturn<Container, Result, Validatable>
>, Validators<Container> {
    constructor(
        public validators : Container,
        public handler : Function<[RecordParameter<Container>, Container], Result>,
        public validation : Function<[Result], Validatable>
    ) {
    }

    validate(argument: RecordParameter<Container>) : ValidatorReturn<Container, Result, Validatable> {

        return new ValidatableMap(argument, this.validators, this.handler, this.validation);
        //
        // let validatables = this.handler(argument, this.validators);
        // let validation = this.validation;
        // let validatable = validation(validatables);
        //
        // return  {
        //
        //     get validatables () {
        //         return validatables;
        //     },
        //     get validatable () {
        //         return validatable;
        //     },
        //     get value () {
        //         return argument;
        //     },
        //     get valid  () {
        //         return this.validatable.valid;
        //     }
        // }
    }
}



