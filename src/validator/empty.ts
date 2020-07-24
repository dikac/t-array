import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";
import Function from "@dikac/t-function/function";

export default class Empty<Msg>
    implements
        Validator<unknown[], Readonly<Validatable<boolean> & Message<Msg> & Value<unknown[]>>>,
        Message<Function<[Readonly<Value> & Readonly<Validatable>], Msg>>
{

    constructor(
        public empty : boolean,
        public message : Function<[Readonly<Value> & Readonly<Validatable>], Msg>
    ) {
    }

    validate<V extends unknown[]= unknown[]>(value: V): Readonly<Validatable<boolean> & Message<Msg> & Value<V>> {

        // todo FIX WITHOTUT ANY
        return <any>new EmptyValidatable(value, this.empty, this.message);
    }
}
