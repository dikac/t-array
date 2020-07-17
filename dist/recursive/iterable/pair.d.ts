import Recursive from "../recursive";
import Property from "../infer/property";
import Guard from "@dikac/t-function/boolean/guard";
export default class Pair<Type, Object extends Recursive<Type> = Recursive<Type>> implements Iterable<[Property<Object>[], Type]> {
    record: Object;
    validation: Guard<any, Type>;
    protected keys: number[];
    constructor(record: Object, validation: Guard<any, Type>);
    [Symbol.iterator](): Iterator<[Property<Object>[], Type]>;
}
