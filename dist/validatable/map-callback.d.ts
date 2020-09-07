import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListParameter from "../validator/base/list/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
export default class MapCallback<Validators extends Validator[] = Validator[], Result extends Instance[] = Instance[], MessageType = unknown, ValidatableType extends Validatable = Validatable, ValueType extends ListParameter<Validators> = ListParameter<Validators>> implements Map<Validators, Result, MessageType, ValidatableType, ValueType> {
    readonly value: ValueType;
    readonly validators: Validators;
    readonly validatables: Result;
    readonly validatable: ValidatableType;
    readonly valid: boolean;
    readonly messages: Result;
    private messageFactory;
    constructor(value: ValueType, validators: Validators, map: (value: ListParameter<Validators>, validators: Validators) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => MessageType);
    get message(): MessageType;
}
