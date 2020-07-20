import Validatable from "@dikac/t-validatable/validatable";
import Validate from "../../validatable/recursive/map";
import RecursiveInferReturn from "../../validatable/recursive/recursive";
import RecursiveInferArgument from "./parameter/parameter";
import Validator from "@dikac/t-validator/validator";
import RecursiveInterface from "../recursive";
import ValidatableArray from "../../validatable/array";
import Default from "./default";
import Value from "@dikac/t-value/value";
import And from "../../validatable/recursive/boolean/and";

export default class Recursive<
    Container extends RecursiveInterface<Validator>
    > extends Default<
    Container,
    RecursiveInferArgument<Container>,
    RecursiveInferReturn<Container> & Validatable
    > {

    validate(value: RecursiveInferArgument<Container>) :RecursiveInferReturn<Container> & Validatable & Value<RecursiveInferReturn<Container>> {

        let results :  RecursiveInferReturn<Container> = Validate(this.validators, value, false);

        return <any> new ValidatableArray(<any>results, And, this.defaults, value);

    }
}



