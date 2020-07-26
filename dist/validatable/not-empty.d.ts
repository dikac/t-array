import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import { List } from "ts-toolbelt";
export default class NotEmpty<Msg, Val extends unknown[]> implements Readonly<Value<Val> & Message<Msg> & Validatable>, Iterable<List.UnionOf<Val>> {
    readonly value: Val;
    private _message;
    readonly valid: boolean;
    constructor(value: Val, _message: Function<[Readonly<Value<Val> & Validatable>], Msg>);
    [Symbol.iterator](): Iterator<List.UnionOf<Val>>;
    get message(): Msg;
}
