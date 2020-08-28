import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListParameter from "../validator/base/list/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
export default class MapCallback<ValidatorsT extends Validator[] = Validator[], Result extends Instance[] = Instance[], MessageT = unknown, ValidatableT extends Validatable = Validatable, ValueT extends ListParameter<ValidatorsT> = ListParameter<ValidatorsT>> implements Map<ValidatorsT, Result, MessageT, ValidatableT, ValueT> {
    readonly value: ValueT;
    readonly validators: ValidatorsT;
    readonly validatables: Result;
    readonly validatable: ValidatableT;
    readonly valid: boolean;
    readonly messages: Result;
    private messageFactory;
    constructor(value: ValueT, validators: ValidatorsT, map: (value: ListParameter<ValidatorsT>, validators: ValidatorsT) => Result, validation: (result: Result) => ValidatableT, message: (result: Result) => MessageT);
    get message(): MessageT;
}
