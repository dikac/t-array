import Recursive from "../recursive";
import PropertyInfer from "../index";
import Guard from "@dikac/t-function/boolean/guard";
export default class Property<Type, Object extends Recursive<Type> = Recursive<Type>> implements Iterable<PropertyInfer<Object>[]> {
    record: Object;
    validation: Guard<unknown, Type>;
    protected keys: number[];
    constructor(record: Object, validation: Guard<unknown, Type>);
    [Symbol.iterator](): Iterator<PropertyInfer<Object>[]>;
}
