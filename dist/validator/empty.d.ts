import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";
import Return from "@dikac/t-validator/validatable/simple";
/**
 *  validate if array is empty
 */
export default class Empty<MessageType> implements Validator<Array<any>, [], boolean, boolean, EmptyValidatable<MessageType, Array<any>>>, Message<(result: Readonly<Value<Array<any>>> & Readonly<Validatable>) => MessageType> {
    message: (result: Value<Array<any>> & Readonly<Validatable>) => MessageType;
    constructor(message: (result: Value<Array<any>> & Readonly<Validatable>) => MessageType);
    validate<Argument extends any[]>(value: Argument): Return<Array<any>, Argument, [], EmptyValidatable<MessageType, Argument>>;
}
