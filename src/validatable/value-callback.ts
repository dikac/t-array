import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/validatable";
import Value from "./value";
import MemoizeGetter from "@dikac/t-object/value/set-getter";

export default class ValueCallback<
    ValueT,
    Container extends Validator[] = Validator[],
    Results extends Instance[] = Instance[],
    MessageT = unknown,
    ValidatableT extends Validatable = Validatable
>  implements Value<ValueT, Container, Results, MessageT, ValidatableT> {

    readonly validatable : ValidatableT;
    readonly valid;
    readonly validatables : Results;
    readonly messages : Results;
    private messageFactory : (results:Results)=>MessageT

    constructor(
        readonly value: ValueT,
        readonly validators : Container,
        map : (value:ValueT, validators:Container)=>Results,
        validation : (results:Results)=>ValidatableT,
        message : (results:Results)=>MessageT,
    ) {
        this.messageFactory = message;

        this.validatables = map(value, this.validators);
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
        this.messages = this.validatables;
    }

    get message() : MessageT {

        return MemoizeGetter(this, 'message', this.messageFactory(this.validatables));
    }
}



