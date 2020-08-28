import Validator from "@dikac/t-validator/validator";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-validatable/validation/validation";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import Validators from "../validator/validators/validators";
import Message from "@dikac/t-message/message";
import Messages from "../message/messages/messages";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validatables from "./validatables/validatables";
export interface Interface<ValueT, Container extends Validator[], Results extends Instance[], MessageT, ValidatableT extends Validatable> extends Value<ValueT>, Validatable, Validators<Container>, Message<MessageT>, Messages<Results>, ValidatableContainer<ValidatableT>, Validation<(results: Results) => ValidatableT>, Validatables<Results> {
    readonly messageFactory: (results: Results) => MessageT;
    readonly map: (value: ValueT, validators: Container) => Results;
}
export default class ValueCallback<ValueT, Container extends Validator[] = Validator[], Results extends Instance[] = Instance[], MessageT = unknown, ValidatableT extends Validatable = Validatable> implements Interface<ValueT, Container, Results, MessageT, ValidatableT> {
    readonly value: ValueT;
    readonly validators: Container;
    readonly map: (value: ValueT, validators: Container) => Results;
    readonly validation: (results: Results) => ValidatableT;
    readonly messageFactory: (results: Results) => MessageT;
    readonly validatable: ValidatableT;
    readonly valid: any;
    readonly validatables: Results;
    readonly message: MessageT;
    readonly messages: Results;
    constructor(value: ValueT, validators: Container, map: (value: ValueT, validators: Container) => Results, validation: (results: Results) => ValidatableT, messageFactory: (results: Results) => MessageT);
}
