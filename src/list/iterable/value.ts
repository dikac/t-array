import Pair from "./pair";
import Guard from "@dikac/t-function/boolean/guard";

export default class Value<
    Type,
    Object extends Type[] = Type[]
> implements
    Iterable<Type>
{

    constructor(
        public list : Object,
        public validation : Guard<unknown, Type>,
    ) {

    }

    * [Symbol.iterator](): Iterator<Type> {

        for (let [properties, value] of new Pair(this.list, this.validation)) {

            yield value
        }
    }
}
