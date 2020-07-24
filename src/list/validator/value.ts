import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import RecordValidatable from "../../validator/validatable/list/record";
import OptionalValidatable from "../../validator/validatable/list/optional";
import Function from "@dikac/t-function/function";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import ValidatableValue from "../../list/validatable/value";

export type ValidationReturn<Val, Container extends Validator<Val>[]> = RecordValidatable<Container>|OptionalValidatable<Container>;

export type ValidatorReturn<
    Val,
    Container extends Validator[] = Validator[],
    Result extends ValidatableInterface[] = ValidatableInterface[],
    Validatable extends ValidatableInterface = ValidatableInterface
> = Readonly<{validatables:Result} & ValidatableInterface  & ValueInterface<Val> & {validatable : Validatable}>;

export default class Value<
    Val,
    Container extends Validator[] = Validator[],
    Result extends ValidatableInterface[] = ValidatableInterface[],
    Validatable extends ValidatableInterface = ValidatableInterface
> implements Validator<
/*    Container,*/
    Val,
    ValidatorReturn<Val, Container, Result, Validatable>
>{

    constructor(
        public validators : Container,
        public handler : Function<[Val, Container], Result>,
        public validation : Function<[Result], Validatable>
    ) {
    }

    validate(value: Val) : ValidatorReturn<Val, Container, Result, Validatable> {

        return new ValidatableValue(value, this.validators, this.handler, this.validation)
    }
}



