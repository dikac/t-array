import Validatable from "@dikac/t-validatable/validatable";
import Validate from "./validatable/recursive/map";
import RecursiveInferReturn from "./validatable/recursive/recursive";
import RecursiveInferArgument from "./parameter/recursive/recursive";
import Validator from "@dikac/t-validator/validator";
import Recursive from "../recursive/recursive";
import IterableAnd from "@dikac/t-iterable/validatable/boolean/and";
import ValidatableArray from "../validatable/array";

export default class Array<
    Container extends Recursive<Validator<unknown>>
> implements Validator<
    RecursiveInferArgument<Container>,
    RecursiveInferReturn<Container> & Validatable
> {
    constructor(
        public validators : Container,
        public defaults : boolean = true
    ) {
    }

    validate(value: RecursiveInferArgument<Container>) : RecursiveInferReturn<Container> & Validatable {

        let results : RecursiveInferReturn<Container> = Validate(this.validators, value);

        return <any> new ValidatableArray(results, IterableAnd, this.defaults, value);

    }
}



