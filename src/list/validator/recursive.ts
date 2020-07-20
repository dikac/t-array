import Validatable from "@dikac/t-validatable/validatable";
import Validate from "../../validatable/list/map";
import RecursiveInferReturn from "../../validatable/list/recursive";
import RecursiveInferArgument from "./parameter/parameter";
import Validator from "@dikac/t-validator/validator";
//import RecursiveInterface from "../recursive";
import ValidatableArray from "../../validatable/combine";
import Default from "./default";
import Value from "@dikac/t-value/value";
import And from "../../validatable/list/boolean/and";

export default class Recursive<
    Container extends Validator[] //RecursiveInterface<Validator>
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



