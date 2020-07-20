import Validatable from "@dikac/t-validatable/validatable";
import RecursiveInferReturn from "../../validatable/list/recursive";
import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Default from "./default";
import { Object } from "ts-toolbelt";
export default class ValuePartial<Val, Container extends Validator[]> extends Default<Container, Val, Object.Partial<RecursiveInferReturn<Container>, 'deep'> & Validatable & ValueInterface<Val>> {
    validate(value: Val): Object.Partial<RecursiveInferReturn<Container>, 'deep'> & Validatable & ValueInterface<Val>;
}
