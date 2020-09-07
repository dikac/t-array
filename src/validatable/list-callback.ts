import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/validatable";
import List from "./list";
import MemoizeGetter from "@dikac/t-object/value/set-getter";

export default class ListCallback<
    ValueType extends unknown[],
    ValidatorType extends Validator = Validator,
    Results extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
>  implements List<ValueType, ValidatorType, Results, MessageType, ValidatableType>{

    readonly validatable;
    readonly valid;
    readonly validatables : Results;
    readonly messages : Results;
    private messageFactory : (results:Results)=>MessageType

    constructor(
        readonly value: ValueType,
        readonly validator : ValidatorType,
        map : (value:ValueType, validator:ValidatorType)=>Results,
        validation : (results:Results)=>ValidatableType,
        message : (results:Results)=>MessageType,
    ) {

        this.messageFactory = message;

        this.validatables = map(value, this.validator);
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
        this.messages = this.validatables;
    }

    get message() : MessageType {

        return MemoizeGetter(this, 'message', this.messageFactory(this.validatables));
    }
}



