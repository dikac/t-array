import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotEmptyValidatable from "../validatable/not-empty";
import Function from "@dikac/t-function/function";

export default class NotEmpty<Msg, Val extends unknown[]>
    implements
        Validator<Val, Readonly<Validatable<boolean> & Message<Msg> & Value<Val>>>,
        Message<Function<[Readonly<Value<Val>> & Readonly<Validatable>], Msg>>
{

    constructor(
        public empty : boolean,
        public message : Function<[Readonly<Value<Val>> & Readonly<Validatable>], Msg>
    ) {
    }

    validate(value: Val): Readonly<Validatable<boolean> & Message<Msg> & Value<Val>> {

        return new NotEmptyValidatable(value, this.message);
    }
}
