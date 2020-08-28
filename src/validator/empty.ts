import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Message from "@dikac/t-message/message";
import Value from "@dikac/t-value/value";
import EmptyValidatable from "../validatable/empty";
import Return from "@dikac/t-validator/validatable/simple";


export default class Empty<
    MessageT
> implements Validator<Array<any>, [], boolean, boolean, EmptyValidatable<MessageT, Array<any>>>,
    Message<(result:Readonly<Value<Array<any>>> & Readonly<Validatable>)=>MessageT> {

    constructor(
        public message : (result:Value<Array<any>> & Readonly<Validatable>)=>MessageT
    ) {
    }

    validate<Argument extends any[]>(value: Argument): Return<Array<any>, Argument, [], EmptyValidatable<MessageT, Argument>> {

        return <Return<Array<any>, Argument, [], EmptyValidatable<MessageT, Argument>>> new EmptyValidatable<MessageT, Argument>(value, this.message);
    }
}
