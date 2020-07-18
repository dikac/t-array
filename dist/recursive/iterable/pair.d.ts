import Recursive from "../recursive";
import Index from "../index";
import Guard from "@dikac/t-function/boolean/guard";
export default class Pair<Type, Object extends Recursive<Type> = Recursive<Type>> implements Iterable<[Index<Object>[], Type]> {
    record: Object;
    validation: Guard<unknown, Type>;
    protected keys: number[];
    constructor(record: Object, validation: Guard<unknown, Type>);
    [Symbol.iterator](): Iterator<[Index<Object>[], Type]>;
}
