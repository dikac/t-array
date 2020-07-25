import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import ValidateMap from "../../validator/validatable/list/standard";
import RecursiveInferReturn from "../../validator/validatable/list/list";
import MapCallback from "./map-callback";
import RecordParameter from "./parameter/parameter";
import Validatables from "../validatables/validatables";


export type ValidatorReturn<
    Container extends Validator[],
    Validatable extends ValidatableInterface
> = Readonly<
   Validatables<RecursiveInferReturn<Container>> &
    ValidatableInterface  &
    ValueInterface<RecordParameter<Container>> &
    {validatable : Validatable} &
    {validation:Function<[RecursiveInferReturn<Container>], Validatable>}
>;

export default class MapAll<
    Container extends Validator[] = Validator[],
    Validatable extends ValidatableInterface = ValidatableInterface
> implements Validator<
    RecordParameter<Container>,
    ValidatorReturn<Container, Validatable>
>{

    constructor(
        public validators : Container,
        public validation : Function<[RecursiveInferReturn<Container>], Validatable>
    ) {

    }

    validate(value: RecordParameter<Container>) : ValidatorReturn<Container, Validatable> {

        let validator = new MapCallback(
            this.validators, (value, validators) => <any>ValidateMap(<any>value, validators, false),
            this.validation
        );

        return <ValidatorReturn<Container, Validatable>> validator.validate(value);
    }
}



