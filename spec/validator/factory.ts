import ValidatableFactory from "../validatable/factory";

export default class Factoryz<Value = unknown>  {

    constructor(private type : string) {
    }

    validate(value : Value) : ValidatableFactory {

        return new ValidatableFactory(value, this.type);
    }
}

