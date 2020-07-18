import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
export default class Array<Valid extends Validatable, Val> extends globalThis.Array<Valid> implements Value<Val> {
    validation: Function<[Valid[], boolean], boolean>;
    defaults: boolean;
    value: Val;
    [Symbol.species]: ArrayConstructor;
    constructor(validatables: Valid[], validation: Function<[Valid[], boolean], boolean>, defaults: boolean, value: Val);
    get valid(): boolean;
}
