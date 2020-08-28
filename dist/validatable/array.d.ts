import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";
import Construct from "@dikac/t-validator/validatable/simple";
import Instance from "@dikac/t-validator/validatable/validatable";
export default function Array<MessageT, Argument>(value: Argument, message: (result: Readonly<Value<Argument> & Validatable>) => MessageT): Readonly<Construct<any, Argument, any[], Instance<unknown, MessageT>>>;
