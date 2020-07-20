import Validatable from "@dikac/t-validatable/validatable";
import Validator from "@dikac/t-validator/validator";
export default abstract class Default<Container extends Validator[], //Recursive<Validator>,
Param, Result extends Validatable> implements Validator<Param, Result> {
    validators: Container;
    defaults: boolean;
    constructor(validators: Container, defaults?: boolean);
    abstract validate(value: Param): Result;
}
