import Validatable from "@dikac/t-validatable/validatable";
import ValidateValue from "./validatable/recursive/value";
import RecursiveInferReturn from "./validatable/recursive/recursive";
import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Array from "../validatable/array";
import IterableAnd from "@dikac/t-iterable/validatable/boolean/and";

export default class Value<
    Val,
    Container extends Validator<Val>[]
> implements Validator<
    Val,
    RecursiveInferReturn<Container> & Validatable & ValueInterface<Val>
> {

    constructor(
        public validators : Container,
        public defaults : boolean = true
    ) {
    }

    validate(value: Val) : RecursiveInferReturn<Container> & Validatable & ValueInterface<Val> {

        let results : RecursiveInferReturn<Container> = ValidateValue(this.validators, value);

        return <any> new Array(results, IterableAnd, this.defaults, value);

    }
}



