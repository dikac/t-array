import Validatable from "@dikac/t-validatable/validatable";
import Validate from "./recursive/array";
import And from "../validatable/and";
import RecursiveInferReturn from "./recursive/infer/return";
import RecursiveInferArgument from "./recursive/infer/argument";
import Validator from "@dikac/t-validator/validator";
import Recursive from "../recursive/recursive";

export default class Array<
    Container extends Recursive<Validator<unknown>>
> implements Validator<
    RecursiveInferArgument<Container>,
    RecursiveInferReturn<Container> & Validatable
> {
    constructor(
        public validators : Container
    ) {
    }

    validate(value: RecursiveInferArgument<Container>) : RecursiveInferReturn<Container> & Validatable {

        let results : RecursiveInferReturn<Container> = Validate(this.validators, value);

        return And(results);

    }
}



