import Validatable from "@dikac/t-validatable/validatable";
import RecursiveInferReturn from "../../validatable/list/recursive";
import RecursiveInferArgument from "./parameter/parameter";
import Validator from "@dikac/t-validator/validator";
import Default from "./default";
import Value from "@dikac/t-value/value";
export default class List<Container extends Validator[]> extends Default<Container, RecursiveInferArgument<Container>, RecursiveInferReturn<Container> & Validatable> {
    validate(value: RecursiveInferArgument<Container>): RecursiveInferReturn<Container> & Validatable & Value<RecursiveInferReturn<Container>>;
}
