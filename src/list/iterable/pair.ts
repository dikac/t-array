import ValueValidation from "../../assert/throwable/value-validation";
import Guard from "@dikac/t-function/boolean/guard";
import {List} from "ts-toolbelt";

export default class Pair<
    Type,
    Object extends Type[] = Type[]
> implements
    Iterable<[List.Keys<Object>[], Type]>
{

    protected keys : number[] = [];

    constructor(
        public record : Object,
        public validation : Guard<unknown, Type>,
    ) {

    }

    * [Symbol.iterator](): Iterator<[List.Keys<Object>[], Type]> {

        for(const [property, value] of this.record.entries()) {


            const properties = [...this.keys, property];

            if(this.validation(value)) {

                yield [<List.Keys<Object>[]>properties, value];

            } else if(Array.isArray(value)) {

                let recursive = new Pair(value, this.validation);
                recursive.keys.push(...properties);

                yield * recursive;

            } else {

                // TODO IMPROVE VALIDATION TO STRING
                // @ts-ignore
                throw ValueValidation(properties.join('.'), 'valid', (this.validation).toString())
            }
        }

    }
}
