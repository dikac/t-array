import Validatable from "@dikac/t-validatable/validatable";
import RecursiveInferReturn from "../../validatable/recursive/recursive";
import RecursiveInferArgument from "./parameter/parameter";
import Validator from "@dikac/t-validator/validator";
import RecursiveInterface from "../recursive";
import Default from "./default";
import Value from "@dikac/t-value/value";
export default class Recursive<Container extends RecursiveInterface<Validator>> extends Default<Container, RecursiveInferArgument<Container>, RecursiveInferReturn<Container> & Validatable> {
    validate(value: RecursiveInferArgument<Container>): RecursiveInferReturn<Container> & Validatable & Value<RecursiveInferReturn<Container>>;
}
