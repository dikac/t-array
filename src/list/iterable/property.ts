import Pair from "./pair";
import Guard from "@dikac/t-function/boolean/guard";
import {List} from "ts-toolbelt";

export default class Property<
    Type,
    Object extends Type[] = Type[]
> implements
    Iterable<List.Keys<Object>[]>
{

    protected keys : number[] = [];

    constructor(
        public list : Object,
        public validation : Guard<unknown, Type>,
    ) {

    }

    * [Symbol.iterator](): Iterator<List.Keys<Object>[]> {

        for (let [properties, value] of new Pair(this.list, this.validation)) {

            yield properties
        }
    }
}
