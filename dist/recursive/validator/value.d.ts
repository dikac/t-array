import Validatable from "@dikac/t-validatable/validatable";
import RecursiveInferReturn from "../../validatable/recursive/recursive";
import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Recursive from "../recursive";
import Default from "./default";
export default class Value<Val, Container extends Recursive<Validator>> extends Default<Container, Val, RecursiveInferReturn<Container> & Validatable & ValueInterface<Val>> {
    validate(value: Val): RecursiveInferReturn<Container> & Validatable & ValueInterface<Val>;
}