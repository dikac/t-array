import Validator from "@dikac/t-validator/validator";
import Validatable from "@dikac/t-validatable/validatable";
import Instance from "@dikac/t-validator/validatable/validatable";
import Value from "./value";
import MemoizeAccessor from "@dikac/t-object/function/memoize-accessor";

export default class ValueCallback<
    ValueType,
    Container extends Validator[] = Validator[],
    Results extends Instance[] = Instance[],
    MessageType = unknown,
    ValidatableType extends Validatable = Validatable
>  implements Value<ValueType, Container, Results, MessageType, ValidatableType> {

    readonly validatable : ValidatableType;
    readonly valid;
    readonly validatables : Results;
    readonly messages : Results;
    private messageFactory : (results:Results)=>MessageType

    constructor(
        readonly value: ValueType,
        readonly validators : Container,
        map : (value:ValueType, validators:Container)=>Results,
        validation : (results:Results)=>ValidatableType,
        message : (results:Results)=>MessageType,
    ) {
        this.messageFactory = message;

        this.validatables = map(value, this.validators);
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
        this.messages = this.validatables;
    }

    @MemoizeAccessor()
    get message() : MessageType {

        return this.messageFactory(this.validatables);
    }
}



