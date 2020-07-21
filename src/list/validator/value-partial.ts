import Validatable from "@dikac/t-validatable/validatable";
import ValidateValue from "../../validatable/list/value";
import RecursiveInferReturn from "../../validatable/list/recursive";
import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Combine from "../../validatable/combine";
import Default from "./default";
import {Object} from "ts-toolbelt";
import And from "../../validatable/list/boolean/and";

export default class ValuePartial<
    Val,
    Container extends Validator[]
> extends Default<
    Container,
    Val,
    Object.Partial<RecursiveInferReturn<Container>, 'deep'> & Validatable  & ValueInterface<Val>
>{

    validate(value: Val) : Object.Partial<RecursiveInferReturn<Container>, 'deep'> & Validatable & ValueInterface<Val> {

        let results : Object.Partial<RecursiveInferReturn<Container>, 'deep'> = ValidateValue(this.validators, value, true);

        return <any> new Combine(<any>results, And, this.defaults, value);
    }
}



