import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import ValidateValue from "../../validatable/list/value";
import {List} from "ts-toolbelt";
import RecursiveInferReturn from "../../validatable/list/map";
import ValueCallback from "./value-callback";

export type Return<Validators extends Validator[] = Validator[]> =
    List.Partial<RecursiveInferReturn<Validators>> |
    List.UnionOf<RecursiveInferReturn<Validators>>[] |
    RecursiveInferReturn<Validators>;

export type ValidatorReturn<
    Val,
    Container extends Validator[] = Validator[],
    Validatable extends ValidatableInterface = ValidatableInterface
> = Readonly<{validatables:Return<Container>} & ValidatableInterface  & ValueInterface<Val> & {validatable : Validatable} & {validation:Function<[Return<Container>], Validatable>}>;

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
        public validation : Function<[Return<Container>], Validatable>
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



