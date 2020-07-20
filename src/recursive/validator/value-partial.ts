import Validatable from "@dikac/t-validatable/validatable";
import ValidateValue from "../../validatable/recursive/value";
import RecursiveInferReturn from "../../validatable/recursive/recursive";
import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Array from "../../validatable/array";
import Default from "./default";
import {Object} from "ts-toolbelt";
import And from "../../validatable/recursive/boolean/and";
import Recursive from "../recursive";

export default class ValuePartial<
    Val,
    Container extends Recursive<Validator>
> extends Default<
    Container,
    Val,
    Object.Partial<RecursiveInferReturn<Container>, 'deep'> & Validatable  & ValueInterface<Val>
>{

    validate(value: Val) : Object.Partial<RecursiveInferReturn<Container>, 'deep'> & Validatable & ValueInterface<Val> {

        let results : Object.Partial<RecursiveInferReturn<Container>, 'deep'> = ValidateValue(this.validators, value, true);

        return <any> new Array(<any>results, And, this.defaults, value);
    }
}



