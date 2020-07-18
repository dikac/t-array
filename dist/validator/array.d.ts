import Validatable from "@dikac/t-validatable/validatable";
import RecursiveInferReturn from "./validatable/recursive/recursive";
import RecursiveInferArgument from "./parameter/recursive/recursive";
import Validator from "@dikac/t-validator/validator";
import Recursive from "../recursive/recursive";
export default class Array<Container extends Recursive<Validator<unknown>>> implements Validator<RecursiveInferArgument<Container>, RecursiveInferReturn<Container> & Validatable> {
    validators: Container;
    defaults: boolean;
    constructor(validators: Container, defaults?: boolean);
    validate(value: RecursiveInferArgument<Container>): RecursiveInferReturn<Container> & Validatable;
}
