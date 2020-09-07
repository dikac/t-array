import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListParameter from "../validator/base/list/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
import MemoizeGetter from "@dikac/t-object/value/set-getter";

export default class MapCallback<
    Validators extends Validator[] = Validator[],
    Result extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable,
    ValueType extends ListParameter<Validators> = ListParameter<Validators>
> implements Map<Validators, Result, MessageType, ValidatableType, ValueType> {

    readonly validatables : Result;
    readonly validatable : ValidatableType;
    readonly valid : boolean;
    readonly messages : Result;
    private messageFactory : (result:Result)=>MessageType

    constructor(
        readonly value : ValueType,
        readonly validators : Validators,
        map : (value:ListParameter<Validators>, validators:Validators)=>Result,
        validation : (result:Result)=>ValidatableType,
        message : (result:Result)=>MessageType,
    ) {

        this.messageFactory = message;

        this.validatables = map(value, this.validators);
        this.messages = this.validatables;
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
    }

    get message() : MessageType {

        return MemoizeGetter(this, 'message', this.messageFactory(this.validatables));
    }
}



