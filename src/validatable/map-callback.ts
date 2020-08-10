import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Validation from "@dikac/t-validatable/validation/validation";
import ValidatableContainer from "@dikac/t-validatable/validatable/validatable";
import ListParameter from "../validator/base/list/infer";
import Value from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import Validators from "../validator/validators/validators";
import Message from "@dikac/t-message/message";
import Messages from "../message/messages/messages";
import Validatables from "./validatables/validatables";
import Instance from "@dikac/t-validator/validatable/validatable";
import BaseList from "../validator/base/list/infer";

export type Interface<
    ValidatorsT extends Validator[],
    Result extends Instance[],
    MessageT,
    ValidatableT extends Validatable,
    ValueT extends BaseList<ValidatorsT>
> =
    Readonly<Validators<ValidatorsT>> &
    Readonly<Value<ListParameter<ValidatorsT>>> &
    Readonly<Validatable> &
    Readonly<Validatables<Result>> &
    Readonly<Message<MessageT>> &
    Readonly<ValidatableContainer<ValidatableT>> &
    Readonly<Messages<Result>> &
    Readonly<Validation<Function<[Result], ValidatableT>>> &
    Readonly<{map : Function<[ListParameter<ValidatorsT>, ValidatorsT], Result>}>
;


export default class MapCallback<
    ValidatorsT extends Validator[] = Validator[],
    Result extends Instance[] = Instance[],
    MessageT = unknown,
    ValidatableT extends Validatable = Validatable,
    ValueT extends ListParameter<ValidatorsT> = ListParameter<ValidatorsT>
> implements Interface<ValidatorsT, Result, MessageT, ValidatableT, ValueT> {

    readonly validatables : Result;
    readonly validatable : ValidatableT;
    readonly valid : boolean;
    readonly message : MessageT;
    readonly messages : Result;

    constructor(
        readonly value : ValueT,
        readonly validators : ValidatorsT,
        readonly map : Function<[ListParameter<ValidatorsT>, ValidatorsT], Result>,
        readonly validation : Function<[Result], ValidatableT>,
        message : Function<[Result], MessageT>,
    ) {

        this.validatables = this.map(value, this.validators);
        this.messages = this.validatables;
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
        this.message = message(this.validatables);
    }
}



