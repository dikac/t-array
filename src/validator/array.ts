import Validator from "@dikac/t-validator/simple";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import ArrayValidatable from "../validatable/array";
import Function from "@dikac/t-function/function";
import Instamce from "@dikac/t-validator/validatable/validatable";
import Return from "@dikac/t-validator/validatable/simple";

export default class Array_<MessageT>
    implements
        Validator<unknown, Array<any>, Readonly<Instamce<unknown, MessageT>>>,
        Message<Function<[Readonly<Value> & Readonly<Validatable>], MessageT>>
{

    constructor(
       public message : Function<[Readonly<Value> & Readonly<Validatable>], MessageT>
    ) {
    }

    validate<Argument extends Array<any>>(value: Argument) : Readonly<Instamce<Argument, MessageT, true>>
    validate<Argument extends unknown>(value: Argument) : Return<unknown, Argument, Array<any>, Readonly<Instamce<Argument, MessageT>>>
    validate<Argument extends unknown>(value: Argument)  {

        return  ArrayValidatable(value, this.message);
    }
}
