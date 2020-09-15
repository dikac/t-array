import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListParameter from "../validator/base/list/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
export default class MapCallback<Validators extends Validator[] = Validator[], Result extends Instance[] = Instance[], MessageType = unknown, ValidatableType extends Validatable = Validatable, ValueType extends ListParameter<Validators> = ListParameter<Validators>> implements Map<Validators, Result, MessageType, ValidatableType, ValueType> {
    #private;
    readonly validators: Validators;
    private map;
    private validation;
    constructor(value: ValueType, validators: Validators, map: (value: ListParameter<Validators>, validators: Validators) => Result, validation: (result: Result) => ValidatableType, message: (result: Result) => MessageType);
    get value(): ValueType;
    get valid(): boolean;
    get validatable(): ValidatableType;
    get messages(): Result;
    get validatables(): Result;
    get message(): MessageType;
}
