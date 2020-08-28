import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import ListParameter from "../validator/base/list/infer";
import Value from "@dikac/t-value/value";
import Validators from "../validator/validators/validators";
import Message from "@dikac/t-message/message";
import Messages from "../message/messages/messages";
import Validatables from "./validatables/validatables";
import Instance from "@dikac/t-validator/validatable/validatable";
import BaseList from "../validator/base/list/infer";
export default interface Map<ValidatorsT extends Validator[], Result extends Instance[], MessageT, ValidatableT extends Validatable, ValueT extends BaseList<ValidatorsT>> extends Readonly<Validators<ValidatorsT>>, Readonly<Value<ListParameter<ValidatorsT>>>, Readonly<Validatable>, Readonly<Validatables<Result>>, Readonly<Message<MessageT>>, Readonly<ValidatableContainer<ValidatableT>>, Readonly<Messages<Result>> {
}
