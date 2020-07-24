import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import ValidateValue from "../../validator/validatable/list/value";
import ValueCallback from "./value-callback";
import PartialUnion from "../../validator/validatable/list/partial-union";

export type ValidatorReturn<
    Val,
    Container extends Validator[] = Validator[],
    Validatable extends ValidatableInterface = ValidatableInterface
> = Readonly<{validatables:PartialUnion<Container>} &
    ValidatableInterface  &
    ValueInterface<Val> &
    {validatable : Validatable} &
    {validation:Function<[PartialUnion<Container>], Validatable>}
>;

export default class Value<
    Val,
    Container extends Validator[] = Validator[],
    Validatable extends ValidatableInterface = ValidatableInterface
> implements Validator<
    /*    Container,*/
    Val,
    ValidatorReturn<Val, Container, Validatable>
>{

    constructor(
        public validators : Container,
        public validation : Function<[PartialUnion<Container>], Validatable>
    ) {

    }

    validate(value: Val) : ValidatorReturn<Val, Container, Validatable> {

        let validator = new ValueCallback(
            this.validators, (value, validators) => <any>ValidateValue(value, validators, true),
            this.validation
        );

        return <ValidatorReturn<Val, Container, Validatable>> validator.validate(value);
    }
}



