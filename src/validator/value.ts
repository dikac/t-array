import Validatable from "@dikac/t-validatable/validatable";
import ValidateValue from "./validatable/recursive/value";
import And from "../validatable/and";
import RecursiveInferReturn from "./validatable/recursive/recursive";
import Validator from "@dikac/t-validator/validator";

export default class Value<
    Val,
    Container extends Validator<Val>[]
> implements Validator<
    Val,
    RecursiveInferReturn<Container> & Validatable
> {

    constructor(
        public validators : Container
    ) {
    }

    validate(value: Val) : RecursiveInferReturn<Container> & Validatable {

        let results : RecursiveInferReturn<Container> = ValidateValue(this.validators, value);

        return  And(results);

    }
}



