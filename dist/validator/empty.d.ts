import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";
import Function from "@dikac/t-function/function";
import Return from "@dikac/t-validator/return/return";
export default class Empty<MessageT> implements Validator<Array<any>, [], EmptyValidatable<MessageT, Array<any>>>, Message<Function<[Readonly<Value<Array<any>>> & Readonly<Validatable>], MessageT>> {
    message: Function<[Value<Array<any>> & Readonly<Validatable>], MessageT>;
    constructor(message: Function<[Value<Array<any>> & Readonly<Validatable>], MessageT>);
    validate<Argument extends any[]>(value: Argument): Return<Array<any>, Argument, [], EmptyValidatable<MessageT, Argument>>;
}
