import Validator from "@dikac/t-validator/validator";
import ValueInterface from "@dikac/t-value/value";
import Function from "@dikac/t-function/function";
import ValidatableInterface from "@dikac/t-validatable/validatable";
import Validators from "../validators/validators";

export default class ValueCallback<
    Val,
    Container extends Validator[] = Validator[],
    Result extends ValidatableInterface[] = ValidatableInterface[],
    Validatable extends ValidatableInterface = ValidatableInterface
>  implements Readonly<ValueInterface<Val> & ValidatableInterface & Validators<Container>> {

     readonly validatable;
     readonly valid;
     readonly validatables : Result;

    constructor(
        readonly value: Val,
        readonly validators : Container,
        readonly handler : Function<[Val, Container], Result>,
        readonly validation : Function<[Result], Validatable>
    ) {

        this.validatables = this.handler(value, this.validators);
        this.validatable = validation(this.validatables);
        this.valid = this.validatable.valid;
    }

}


