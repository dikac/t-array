import Validatable from "@dikac/t-validatable/validatable";
import ValidateValue from "../../validatable/list/value";
import RecursiveInferReturn from "../../validatable/list/recursive";
import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Combine from "../../validatable/combine";
//import Recursive from "../recursive";
import Default from "./default";
import And from "../../validatable/list/boolean/and";

export default class Value<
    Val,
    Container extends Validator[]//Recursive<Validator>
> extends Default<
    Container,
    Val,
    RecursiveInferReturn<Container> & Validatable  & ValueInterface<Val>
>{

    validate(value: Val) : RecursiveInferReturn<Container> & Validatable & ValueInterface<Val> {

        let results : RecursiveInferReturn<Container> = ValidateValue(this.validators, value, false);

        return <any> new Combine(<any>results, And, this.defaults, value);
    }
}



