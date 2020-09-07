import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import NotEmptyArgument from "../boolean/not-empty";
import {List} from "ts-toolbelt";

export default class NotEmpty<MessageType, Values extends unknown[]>
    implements
        Readonly<Value<Values> & Message<MessageType> & Validatable>, Iterable<List.UnionOf<Values>>

{
    readonly valid : boolean;

    constructor(
        readonly value : Values,
        private _message : (result:Readonly<Value<Values> & Validatable>)=>MessageType,
    ) {

        this.valid = NotEmptyArgument(value);

    }

    * [Symbol.iterator](): Iterator<List.UnionOf<Values>> {

        yield * this.value;
    }

    get message() : MessageType {

        return this._message(this);
    }
}
