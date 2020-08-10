import Validator from "@dikac/t-validator/validator";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-validatable/validation/validation";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import Validators from "../validator/validators/validators";
import Message from "@dikac/t-message/message";
import Messages from "../message/messages/messages";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validatables from "./validatables/validatables";


export interface Interface<
    ValueT,
    Container extends Validator[],
    Results extends Instance[],
    MessageT,
    ValidatableT extends Validatable
> extends
    Value<ValueT> ,
    Validatable ,
    Validators<Container> ,
    Message<MessageT> ,
    Messages<Results> ,
    ValidatableContainer<ValidatableT> ,
    Validation<Function<[Results], ValidatableT>>,
    Validatables<Results>
{
    readonly messageFactory : Function<[Results], MessageT>
    readonly map : Function<[ValueT, Container], Results>
}


export default class ValueCallback<
    ValueT,
    Container extends Validator[] = Validator[],
    Results extends Instance[] = Instance[],
    MessageT = unknown,
    ValidatableT extends Validatable = Validatable
>  implements Interface<ValueT, Container, Results, MessageT, ValidatableT> {

    readonly validatable : ValidatableT;
    readonly valid;
    readonly validatables : Results;
    readonly message : MessageT;
    readonly messages : Results;

    constructor(
        readonly value: ValueT,
        readonly validators : Container,
        readonly map : Function<[ValueT, Container], Results>,
        readonly validation : Function<[Results], ValidatableT>,
        readonly messageFactory : Function<[Results], MessageT>,
    ) {

        this.validatables = this.map(value, this.validators);
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
        this.message = messageFactory(this.validatables);
        this.messages = this.validatables;
    }

}



