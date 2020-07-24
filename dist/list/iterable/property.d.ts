import Guard from "@dikac/t-function/boolean/guard";
import { List } from "ts-toolbelt";
export default class Property<Type, Object extends Type[] = Type[]> implements Iterable<List.Keys<Object>[]> {
    list: Object;
    validation: Guard<unknown, Type>;
    protected keys: number[];
    constructor(list: Object, validation: Guard<unknown, Type>);
    [Symbol.iterator](): Iterator<List.Keys<Object>[]>;
}
