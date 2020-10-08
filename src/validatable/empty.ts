import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import EmptyArgument from "../boolean/empty";
import {List} from "ts-toolbelt";


export default class Empty<MessageType, Values extends unknown[]>
    implements
        Readonly<Value<Values>>,
        Readonly<Message<MessageType>>,
        Readonly<Validatable>,
        Iterable<List.UnionOf<Values>>
{
    readonly valid : boolean;

    constructor(
        readonly value : Values,
        private _message : (result:Readonly<Value<Values> & Validatable>)=>MessageType,
    ) {

        this.valid = EmptyArgument(value);
    }

    * [Symbol.iterator](): Iterator<List.UnionOf<Values>> {

        yield * this.value;
    }

    get message() : MessageType {

        return this._message(this);
    }
}
