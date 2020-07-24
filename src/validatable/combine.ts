import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";
import And from "./list/boolean/and";

export default class Combine<Valid extends Validatable[], Val> implements Value<Val> {

    constructor(
        public validatables : Valid,
        public validation : Function<[Valid, boolean], boolean> = And,
        public defaults : boolean,
        public value : Val
    ) {
    }

    get valid() : boolean {

        return this.validation(this.validatables, this.defaults);
    }

}
