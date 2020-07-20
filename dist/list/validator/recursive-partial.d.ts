import Validatable from "@dikac/t-validatable/validatable";
import RecursiveInferReturn from "../../validatable/list/recursive";
import RecursiveInferArgument from "./parameter/parameter";
import Validator from "@dikac/t-validator/validator";
import Default from "./default";
import { Object } from "ts-toolbelt";
import Value from "@dikac/t-value/value";
export default class RecursivePartial<Container extends Validator[]> extends Default<Container, RecursiveInferArgument<Container>, Object.Partial<RecursiveInferReturn<Container>, 'deep'> & Validatable> {
    validate(value: RecursiveInferArgument<Container>): Object.Partial<RecursiveInferReturn<Container>, 'deep'> & Validatable & Value<Object.Partial<RecursiveInferReturn<Container>, 'deep'>>;
}
