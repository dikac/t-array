import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
export default class Combine<Valid extends Validatable[], Val> implements Value<Val> {
    validatables: Valid;
    validation: Function<[Valid, boolean], boolean>;
    defaults: boolean;
    value: Val;
    constructor(validatables: Valid, validation: Function<[Valid, boolean], boolean>, defaults: boolean, value: Val);
    get valid(): boolean;
}
