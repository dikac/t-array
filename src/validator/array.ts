import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import ArrayValidatable from "../validatable/array";
import Function from "@dikac/t-function/function";

export type Return<Msg> =
    Readonly<Validatable<true> & Message<Msg> & Value<unknown[]>> |
    Readonly<Validatable<false> & Message<Msg> & Value<unknown>>;

export default class Object_<Msg>
    implements
        Validator<object, Return<Msg>>,
        Message<Function<[Readonly<Value> & Readonly<Validatable>], Msg>>
{

    constructor(
       public message : Function<[Readonly<Value> & Readonly<Validatable>], Msg>
    ) {
    }

    validate(value: unknown): Return<Msg> {

        return ArrayValidatable(value, this.message);
    }
}
