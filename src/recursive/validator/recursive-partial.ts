import Validatable from "@dikac/t-validatable/validatable";
import Validate from "../../validatable/recursive/map";
import RecursiveInferReturn from "../../validatable/recursive/recursive";
import RecursiveInferArgument from "./parameter/parameter";
import Validator from "@dikac/t-validator/validator";
import Recursive from "../recursive";
import ValidatableArray from "../../validatable/array";
import Default from "./default";
import {Object} from "ts-toolbelt";
import And from "../../validatable/recursive/boolean/and";
import Value from "@dikac/t-value/value";

export default class RecursivePartial<
    Container extends Recursive<Validator>
> extends Default<
    Container,
    RecursiveInferArgument<Container>,
    Object.Partial<RecursiveInferReturn<Container>, 'deep'> & Validatable
> {

    validate(value: RecursiveInferArgument<Container>) : Object.Partial<RecursiveInferReturn<Container>, 'deep'> & Validatable & Value<Object.Partial<RecursiveInferReturn<Container>, 'deep'>> {

        let results :  Object.Partial<RecursiveInferReturn<Container>, 'deep'> = Validate(this.validators, value, true);

        return <any> new ValidatableArray(<any>results, And, this.defaults, value);

    }
}



