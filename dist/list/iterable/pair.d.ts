import Guard from "@dikac/t-function/boolean/guard";
import { List } from "ts-toolbelt";
export default class Pair<Type, Object extends Type[] = Type[]> implements Iterable<[List.Keys<Object>[], Type]> {
    record: Object;
    validation: Guard<unknown, Type>;
    protected keys: number[];
    constructor(record: Object, validation: Guard<unknown, Type>);
    [Symbol.iterator](): Iterator<[List.Keys<Object>[], Type]>;
}
