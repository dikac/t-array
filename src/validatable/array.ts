import Callback from "@dikac/t-value/message/callback";
import ObjectGuard from "../boolean/array";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Construct from "@dikac/t-validator/return/return";
import Instance from "@dikac/t-validator/parameter/instance/instance";


export default function Array<MessageT, Argument>(
    value : Argument,
    message : Function<[Readonly<Value<Argument> & Validatable>], MessageT>
) : Readonly<Construct<any, Argument, any[], Instance<unknown, MessageT>>> {

    return <Readonly<Construct<any, Argument, any[], Instance<unknown, MessageT>>>> Callback(value, ObjectGuard, message);
}
