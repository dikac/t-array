import Validatable from "@dikac/t-validatable/validatable";
import RecursiveInferReturn from "../../validatable/recursive/recursive";
import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Default from "./default";
import { Object } from "ts-toolbelt";
import Recursive from "../recursive";
export default class ValuePartial<Val, Container extends Recursive<Validator>> extends Default<Container, Val, Object.Partial<RecursiveInferReturn<Container>, 'deep'> & Validatable & ValueInterface<Val>> {
    validate(value: Val): Object.Partial<RecursiveInferReturn<Container>, 'deep'> & Validatable & ValueInterface<Val>;
}
