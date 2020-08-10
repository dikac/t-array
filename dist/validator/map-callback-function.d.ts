import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import BaseList from "./base/list/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import { Interface as MapCallbackInterface } from "./map-callback";
export default function MapCallbackFunction<ValidatorsT extends Validator[] = Validator[], Validatables extends Instance[] = Instance[], MessageT = unknown, ValidatableT extends Validatable = Validatable>(validators: ValidatorsT, handler: Function<[BaseList<ValidatorsT>, ValidatorsT], Validatables>, validation: Function<[Validatables], ValidatableT>, message: Function<[Validatables], MessageT>): MapCallbackInterface<ValidatorsT, Validatables, MessageT, ValidatableT>;
