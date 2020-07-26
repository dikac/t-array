import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Function from "@dikac/t-function/function";
import MergeWrapper from "@dikac/t-value/message/readonly-merge";
import MessageCallback from "@dikac/t-value/message/callback";
import NotEmptyArgument from "../boolean/not-empty";
import {List} from "ts-toolbelt";

export default class NotEmpty<Msg, Val extends unknown[]>
    implements
        Readonly<Value<Val> & Message<Msg> & Validatable>, Iterable<List.UnionOf<Val>>

{
    readonly valid : boolean;

    constructor(
        readonly value : Val,
        private _message : Function<[Readonly<Value<Val> & Validatable>], Msg>,
    ) {

        this.valid = NotEmptyArgument(value);

    }

    * [Symbol.iterator](): Iterator<List.UnionOf<Val>> {

        yield * this.value;
    }

    get message() : Msg {

        return this._message(this);
    }
}
