import Validator from "@dikac/t-validator/validator";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import Validators from "../validator/validators/validators";
import Message from "@dikac/t-message/message";
import Messages from "../message/messages/messages";
export default class ValueCallback<ValueT, Container extends Validator[] = Validator[], Results extends (Validatable & Message & Value)[] = (Validatable & Message & Value)[], MessageT = unknown, ValidatableT extends Validatable = Validatable> implements Readonly<Value<ValueT> & Validatable & Validators<Container> & Message<MessageT> & Messages<Results>> {
    readonly value: ValueT;
    readonly validators: Container;
    readonly handler: Function<[ValueT, Container], Results>;
    readonly validation: Function<[Results], ValidatableT>;
    readonly validatable: any;
    readonly valid: any;
    readonly validatables: Results;
    readonly message: MessageT;
    readonly messages: Results;
    constructor(value: ValueT, validators: Container, handler: Function<[ValueT, Container], Results>, validation: Function<[Results], ValidatableT>, message: Function<[Results], MessageT>);
}
