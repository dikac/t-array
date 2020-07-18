import IterableAnd from "@dikac/t-iterable/validatable/boolean/and";
import Value from "@dikac/t-value/value";
import Validatable from "@dikac/t-validatable/validatable";
import Function from "@dikac/t-function/function";

export default class Array<Valid extends Validatable, Val> extends globalThis.Array<Valid>  implements Value<Val> {

    [Symbol.species] = globalThis.Array;

    constructor(
        validatables : Valid[],
        public validation : Function<[Valid[], boolean], boolean> = IterableAnd,
        public defaults : boolean,
        public value : Val
    ) {

        super(...validatables);
    }

    get valid() : boolean {

        return this.validation(this, this.defaults);
    }

}
