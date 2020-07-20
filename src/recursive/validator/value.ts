import Validatable from "@dikac/t-validatable/validatable";
import ValidateValue from "../../validatable/recursive/value";
import RecursiveInferReturn from "../../validatable/recursive/recursive";
import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Array from "../../validatable/array";
import Recursive from "../recursive";
import Default from "./default";
import And from "../../validatable/recursive/boolean/and";

export default class Value<
    Val,
    Container extends Recursive<Validator>
> extends Default<
    Container,
    Val,
    RecursiveInferReturn<Container> & Validatable  & ValueInterface<Val>
>{

    validate(value: Val) : RecursiveInferReturn<Container> & Validatable & ValueInterface<Val> {

        let results : RecursiveInferReturn<Container> = ValidateValue(this.validators, value, false);

        return <any> new Array(<any>results, And, this.defaults, value);
    }
}



