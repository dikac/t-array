import Validator from "@dikac/t-validator/validator";
import BaseValue from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import Validators from "../validator/validators/validators";
import Message from "@dikac/t-message/message";
import Messages from "../message/messages/messages";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validatables from "./validatables/validatables";


export default interface Value<
    ValueT,
    Container extends Validator[],
    Results extends Instance[],
    MessageT,
    ValidatableT extends Validatable
> extends
    BaseValue<ValueT> ,
    Validatable ,
    Validators<Container> ,
    Message<MessageT> ,
    Messages<Results> ,
    ValidatableContainer<ValidatableT> ,
    Validatables<Results>
{

}


