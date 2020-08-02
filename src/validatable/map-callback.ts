import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import RecordParameter from "../validator/parameter/base/list/infer";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validators from "../validator/validators/validators";
import Message from "@dikac/t-message/message";
import Messages from "../message/messages/messages";
import Validatables from "./validatables/validatables";


export default class MapCallback<
    ValidatorsT extends Validator[] = Validator[],
    Result extends (Validatable & Message & Value)[] = (Validatable & Message & Value)[],
    MessageT = unknown,
    ValidatableT extends Validatable = Validatable
> implements
    Validators<ValidatorsT>,
    Value<RecordParameter<ValidatorsT>>,
    Validatable,
    Validatables<Result>,
    Message<MessageT>,
    Messages<Result>
{
    readonly validatables : Result;
    readonly validatable : ValidatableT;
    readonly valid : boolean;
    readonly message : MessageT;
    readonly messages : Result;

    constructor(
        readonly value : RecordParameter<ValidatorsT>,
        readonly validators : ValidatorsT,
        readonly handler : Function<[RecordParameter<ValidatorsT>, ValidatorsT], Result>,
        readonly validation : Function<[Result], ValidatableT>,
        message : Function<[Result], MessageT>,
    ) {

        this.validatables = this.handler(value, this.validators);
        this.messages = this.validatables;
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
        this.message = message(this.validatables);
    }
}



