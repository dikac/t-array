import Validator from "@dikac/t-validator/validator";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import ValidatorContainer from "@dikac/t-validator/validator/validator";
import Message from "@dikac/t-message/message";
import Messages from "../message/messages/messages";
import Instance from "@dikac/t-validator/validatable/validatable";
import Validatables from "./validatables/validatables";
export default interface List<ValueT extends unknown[], ValidatorT extends Validator = Validator, Results extends Instance[] = Instance[], MessageT = unknown, ValidatableT extends Validatable = Validatable> extends Readonly<Value<ValueT>>, Readonly<Validatable>, Readonly<ValidatorContainer<ValidatorT>>, Readonly<Message<MessageT>>, Readonly<Messages<Results>>, Readonly<Validatables<Results>>, Readonly<ValidatableContainer<ValidatableT>> {
}
