import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/validatable";
import Value from "./value";
export default class ValueCallback<ValueT, Container extends Validator[] = Validator[], Results extends Instance[] = Instance[], MessageT = unknown, ValidatableT extends Validatable = Validatable> implements Value<ValueT, Container, Results, MessageT, ValidatableT> {
    readonly value: ValueT;
    readonly validators: Container;
    readonly validatable: ValidatableT;
    readonly valid: any;
    readonly validatables: Results;
    readonly messages: Results;
    private messageFactory;
    constructor(value: ValueT, validators: Container, map: (value: ValueT, validators: Container) => Results, validation: (results: Results) => ValidatableT, message: (results: Results) => MessageT);
    get message(): MessageT;
}
