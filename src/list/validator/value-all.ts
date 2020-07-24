import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import ValidateValue from "../../validator/validatable/list/value";
import RecursiveInferReturn from "../../validator/validatable/list/map";
import ValueCallback from "./value-callback";
import Validatables from "../validatable/validatables";

export type ValidatorReturn<
    Val,
    Container extends Validator[] = Validator[],
    Validatable extends ValidatableInterface = ValidatableInterface
> = Readonly<
    Validatables<RecursiveInferReturn<Container>> &
    ValidatableInterface  &
    ValueInterface<Val> &
    {validatable : Validatable} &
    {validation:Function<[RecursiveInferReturn<Container>], Validatable>}
>;

export default class ValueAll<
    Val,
    Container extends Validator[] = Validator[],
    Validatable extends ValidatableInterface = ValidatableInterface
> implements Validator<
    Val,
    ValidatorReturn<Val, Container, Validatable>
>{
    constructor(
        public validators : Container,
        public validation : Function<[RecursiveInferReturn<Container>], Validatable>
    ) {
    }

    validate(value: Val) : ValidatorReturn<Val, Container, Validatable> {

        let validator = new ValueCallback(
            this.validators, (value, validators) => ValidateValue(value, validators, false),
            this.validation
        );

        return <ValidatorReturn<Val, Container, Validatable>> validator.validate(value);
    }
}



