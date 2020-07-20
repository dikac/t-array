import Validatable from "@dikac/t-validatable/validatable";
import Validator from "@dikac/t-validator/validator";
// import Recursive from "../recursive";

export default abstract class Default<
    Container extends Validator[],//Recursive<Validator>,
    Param ,
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



