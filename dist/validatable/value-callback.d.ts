import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/validatable";
import Value from "./value";
export default class ValueCallback<ValueType, Container extends Validator[] = Validator[], Results extends Instance[] = Instance[], MessageType = unknown, ValidatableType extends Validatable = Validatable> implements Value<ValueType, Container, Results, MessageType, ValidatableType> {
    readonly value: ValueType;
    readonly validators: Container;
    readonly validatable: ValidatableType;
    readonly valid: any;
    readonly validatables: Results;
    readonly messages: Results;
    private messageFactory;
    constructor(value: ValueType, validators: Container, map: (value: ValueType, validators: Container) => Results, validation: (results: Results) => ValidatableType, message: (results: Results) => MessageType);
    get message(): MessageType;
}
