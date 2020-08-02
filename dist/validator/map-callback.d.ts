import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import Validators from "./validators/validators";
import Message from "@dikac/t-message/message";
import ValidatableMap from "../validatable/map-callback";
import BaseList from "./parameter/base/list/infer";
import TypeList from "./parameter/type/list/infer";
import Construct from "@dikac/t-validator/return/return";
import Value from "@dikac/t-value/value";
export interface MapInterface<ValidatorsT extends Validator[] = Validator[], Validatables extends (Validatable & Message & Value)[] = (Validatable & Message & Value)[], MessageT = unknown, ValidatableT extends Validatable = Validatable> extends Validator<BaseList<ValidatorsT>, TypeList<ValidatorsT>, ValidatableMap<ValidatorsT, Validatables, MessageT, ValidatableT>>, Validators<ValidatorsT> {
    validators: ValidatorsT;
    handler: Function<[BaseList<ValidatorsT>, ValidatorsT], Validatables>;
    validation: Function<[Validatables], ValidatableT>;
    message: Function<[Validatables], MessageT>;
}
export default function MapCallback<ValidatorsT extends Validator[] = Validator[], Validatables extends (Validatable & Message & Value)[] = (Validatable & Message & Value)[], MessageT = unknown, ValidatableT extends Validatable = Validatable>(validators: ValidatorsT, handler: Function<[BaseList<ValidatorsT>, ValidatorsT], Validatables>, validation: Function<[Validatables], ValidatableT>, message: Function<[Validatables], MessageT>): MapInterface<ValidatorsT, Validatables, MessageT, ValidatableT>;
export declare class MapCallbackClass<ValidatorsT extends Validator[] = Validator[], Validatables extends (Validatable & Message & Value)[] = (Validatable & Message & Value)[], MessageT = unknown, ValidatableT extends Validatable = Validatable> implements MapInterface<ValidatorsT, Validatables, MessageT, ValidatableT> {
    validators: ValidatorsT;
    handler: Function<[BaseList<ValidatorsT>, ValidatorsT], Validatables>;
    validation: Function<[Validatables], ValidatableT>;
    message: Function<[Validatables], MessageT>;
    constructor(validators: ValidatorsT, handler: Function<[BaseList<ValidatorsT>, ValidatorsT], Validatables>, validation: Function<[Validatables], ValidatableT>, message: Function<[Validatables], MessageT>);
    validate<Argument extends BaseList<ValidatorsT>>(value: Argument): Construct<BaseList<ValidatorsT>, Argument, TypeList<ValidatorsT>, ValidatableMap<ValidatorsT, Validatables, MessageT, ValidatableT>>;
}
