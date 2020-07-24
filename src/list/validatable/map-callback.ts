import Validator from "@dikac/t-validator/validator";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import RecordParameter from "../../list/validator/parameter/parameter";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validators from "../validators/validators";
import Validatable from "@dikac/t-validatable/validatable";

interface Interface<Result> {
    validatables:Result,
    validatable : Validatable
}

export default class MapCallback<
    Container extends Validator[] = Validator[],
    Result extends ValidatableInterface[] = ValidatableInterface[],
    Validatable extends ValidatableInterface = ValidatableInterface
> implements
    Validators<Container>,
    ValueInterface<RecordParameter<Container>>,
    ValidatableInterface,
    Interface<Result>
{
    readonly validatables : Result;
    readonly validatable : Validatable;
    readonly valid : boolean;

    constructor(
        readonly value : RecordParameter<Container>,
        readonly validators : Container,
        readonly handler : Function<[RecordParameter<Container>, Container], Result>,
        readonly validation : Function<[Result], Validatable>
    ) {

        this.validatables = this.handler(value, this.validators);
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
    }
}



