import Validator from "@dikac/t-validator/validator";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import ValidatableValidation from "@dikac/t-validatable/validation/validation";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Message from "@dikac/t-message/message";
import Messages from "../message/messages/messages";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validatables from "./validatables/validatables";
export declare type Interface<ValueT extends unknown[], ValidatorT extends Validator = Validator, Results extends Instance[] = Instance[], MessageT = unknown, ValidatableT extends Validatable = Validatable> = Readonly<Value<ValueT>> & Readonly<Validatable> & Readonly<ValidatorContainer<ValidatorT>> & Readonly<Message<MessageT>> & Readonly<Messages<Results>> & Readonly<Validatables<Results>> & Readonly<ValidatableContainer<ValidatableT>> & Readonly<ValidatableValidation<(results: Results) => ValidatableT>> & Readonly<{
    map: (value: ValueT, validator: ValidatorT) => Results;
}>;
export default class ListCallback<ValueT extends unknown[], ValidatorT extends Validator = Validator, Results extends Instance[] = Instance[], MessageT = unknown, ValidatableT extends Validatable = Validatable> implements Interface<ValueT, ValidatorT, Results, MessageT, ValidatableT> {
    readonly value: ValueT;
    readonly validator: ValidatorT;
    readonly map: (value: ValueT, validator: ValidatorT) => Results;
    readonly validation: (results: Results) => ValidatableT;
    readonly validatable: any;
    readonly valid: any;
    readonly validatables: Results;
    readonly message: MessageT;
    readonly messages: Results;
    constructor(value: ValueT, validator: ValidatorT, map: (value: ValueT, validator: ValidatorT) => Results, validation: (results: Results) => ValidatableT, message: (results: Results) => MessageT);
}
