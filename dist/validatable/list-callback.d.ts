import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/validatable";
import List from "./list";
export default class ListCallback<ValueT extends unknown[], ValidatorT extends Validator = Validator, Results extends Instance[] = Instance[], MessageT = unknown, ValidatableT extends Validatable = Validatable> implements List<ValueT, ValidatorT, Results, MessageT, ValidatableT> {
    readonly value: ValueT;
    readonly validator: ValidatorT;
    readonly validatable: any;
    readonly valid: any;
    readonly validatables: Results;
    readonly messages: Results;
    private messageFactory;
    constructor(value: ValueT, validator: ValidatorT, map: (value: ValueT, validator: ValidatorT) => Results, validation: (results: Results) => ValidatableT, message: (results: Results) => MessageT);
    get message(): MessageT;
}
