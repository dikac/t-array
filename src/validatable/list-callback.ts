import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/validatable";
import List from "./list";
import MemoizeGetter from "@dikac/t-object/value/value/memoize-getter";

export default class ListCallback<
    ValueT extends unknown[],
    ValidatorT extends Validator = Validator,
    Results extends Instance[] = Instance[],
    MessageT = unknown,
    ValidatableT extends Validatable = Validatable
>  implements List<ValueT, ValidatorT, Results, MessageT, ValidatableT>{

    readonly validatable;
    readonly valid;
    readonly validatables : Results;
    readonly messages : Results;
    private messageFactory : (results:Results)=>MessageT

    constructor(
        readonly value: ValueT,
        readonly validator : ValidatorT,
        map : (value:ValueT, validator:ValidatorT)=>Results,
        validation : (results:Results)=>ValidatableT,
        message : (results:Results)=>MessageT,
    ) {

        this.messageFactory = message;

        this.validatables = map(value, this.validator);
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
        this.messages = this.validatables;
    }

    get message() : MessageT {

        return MemoizeGetter(this, 'message', this.messageFactory(this.validatables));
    }
}



