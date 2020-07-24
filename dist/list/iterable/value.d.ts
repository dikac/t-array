import Guard from "@dikac/t-function/boolean/guard";
export default class Value<Type, Object extends Type[] = Type[]> implements Iterable<Type> {
    list: Object;
    validation: Guard<unknown, Type>;
    constructor(list: Object, validation: Guard<unknown, Type>);
    [Symbol.iterator](): Iterator<Type>;
}
