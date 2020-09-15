import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListParameter from "../validator/base/list/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
import ValueMap from "../value/value/list/map";
import InferValueMap from "../value/value/list/infer";
import MemoizeGetter from "@dikac/t-object/value/value/set-getter";

export default class MapCallback<
    Validators extends Validator[] = Validator[],
    Result extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable,
    ValueType extends ListParameter<Validators> = ListParameter<Validators>
> implements Map<Validators, Result, MessageType, ValidatableType, ValueType> {

    #message : (result:Result)=>MessageType;
    #value : ValueType

    constructor(
        value : ValueType,
        readonly validators : Validators,
        private map : (value:ListParameter<Validators>, validators:Validators)=>Result,
        private validation : (result:Result)=>ValidatableType,
        message : (result:Result)=>MessageType,
    ) {

        this.#value = value;
        this.#message = message;
    }

    get value() : ValueType {

        return MemoizeGetter(this, 'value', this.#value.slice(0, this.validators.length) as ValueType);
    }

    get valid() : boolean {

        return this.validatable.valid;
    }

    get validatable() : ValidatableType {

        return MemoizeGetter(this, 'validatable', this.validation(this.validatables));
    }

    get messages() : Result {

        return this.validatables;
    }

    get validatables() : Result {

        return MemoizeGetter(this, 'validatables', this.map(this.value, this.validators));
    }

    get message() : MessageType {

        return MemoizeGetter(this, 'message', this.#message(this.validatables));
    }
}



