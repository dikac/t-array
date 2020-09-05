import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListParameter from "../validator/base/list/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
import MemoizeGetter from "@dikac/t-object/value/set-getter";

export default class MapCallback<
    ValidatorsT extends Validator[] = Validator[],
    Result extends Instance[] = Instance[],
    MessageT = unknown,
    ValidatableT extends Validatable = Validatable,
    ValueT extends ListParameter<ValidatorsT> = ListParameter<ValidatorsT>
> implements Map<ValidatorsT, Result, MessageT, ValidatableT, ValueT> {

    readonly validatables : Result;
    readonly validatable : ValidatableT;
    readonly valid : boolean;
    readonly messages : Result;
    private messageFactory : (result:Result)=>MessageT

    constructor(
        readonly value : ValueT,
        readonly validators : ValidatorsT,
        map : (value:ListParameter<ValidatorsT>, validators:ValidatorsT)=>Result,
        validation : (result:Result)=>ValidatableT,
        message : (result:Result)=>MessageT,
    ) {

        this.messageFactory = message;

        this.validatables = map(value, this.validators);
        this.messages = this.validatables;
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
    }

    get message() : MessageT {

        return MemoizeGetter(this, 'message', this.messageFactory(this.validatables));
    }
}



