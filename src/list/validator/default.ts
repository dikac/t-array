import Validatable from "@dikac/t-validatable/validatable";
import Validator from "@dikac/t-validator/validator";

export default abstract class Default<
    Container extends Validator[],
    Param,
    Result extends Validatable,
> implements Validator<
    Param,
    Result
> {
    constructor(
        public validators : Container,
        public defaults : boolean = true
    ) {
    }

    abstract validate(value: Param) : Result;
}



