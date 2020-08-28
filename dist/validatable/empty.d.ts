import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import { List } from "ts-toolbelt";
export default class Empty<MessageT, Values extends unknown[]> implements Readonly<Value<Values>>, Readonly<Message<MessageT>>, Readonly<Validatable>, Iterable<List.UnionOf<Values>> {
    readonly value: Values;
    private _message;
    readonly valid: boolean;
    constructor(value: Values, _message: (result: Readonly<Value<Values> & Validatable>) => MessageT);
    [Symbol.iterator](): Iterator<List.UnionOf<Values>>;
    get message(): MessageT;
}
