import Validatable from "@dikac/t-validatable/validatable";
import RecursiveInferReturn from "./recursive/infer/return";
import RecursiveInferArgument from "./recursive/infer/argument";
import Validator from "@dikac/t-validator/validator";
import Recursive from "../recursive/recursive";
export default class Array<Container extends Recursive<Validator<unknown>>> implements Validator<RecursiveInferArgument<Container>, RecursiveInferReturn<Container> & Validatable> {
    validators: Container;
    constructor(validators: Container);
    validate(value: RecursiveInferArgument<Container>): RecursiveInferReturn<Container> & Validatable;
}
