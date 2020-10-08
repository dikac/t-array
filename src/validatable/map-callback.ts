import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import ListParameter from "../validator/base/list/infer";
import Instance from "@dikac/t-validator/validatable/validatable";
import Map from "./map";
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";

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

    @MemoizeAccessor()
    get value() : ValueType {

        return this.#value.slice(0, this.validators.length) as ValueType;
    }

    get valid() : boolean {

        return this.validatable.valid;
    }

    @MemoizeAccessor()
    get validatable() : ValidatableType {

        return this.validation(this.validatables);
    }

    get messages() : Result {

        return this.validatables;
    }

    @MemoizeAccessor()
    get validatables() : Result {

        return this.map(this.value, this.validators);
    }

    @MemoizeAccessor()
    get message() : MessageType {

        return this.#message(this.validatables);
    }
}



