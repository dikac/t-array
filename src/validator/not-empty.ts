import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import NotEmptyValidatable from "../validatable/not-empty";
import Construct from "@dikac/t-validator/validatable/simple";

export default class NotEmpty<MessageT>
    implements
        Validator<Array<any>, Array<any>, boolean, boolean, NotEmptyValidatable<MessageT, Array<any>>>,
        Message<(result:Readonly<Value<Array<any>>> & Readonly<Validatable>)=>MessageT>
{

    constructor(
        public message : (result:Readonly<Value<Array<any>>> & Readonly<Validatable>)=>MessageT
    ) {

    }

    validate<Argument extends Array<any>>(value: Argument) : Construct<Array<any>, Argument, Array<any>, NotEmptyValidatable<MessageT, Array<any>>> {

        return <Construct<Array<any>, Argument, Array<any>, NotEmptyValidatable<MessageT, Array<any>>> > new NotEmptyValidatable(value, this.message);
    }
}

