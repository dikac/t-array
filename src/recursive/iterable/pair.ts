import Recursive from "../recursive";
import Property from "../infer/property";
import ValueValidation from "../../assert/throwable/value-validation";
import Guard from "@dikac/t-function/boolean/guard";

export default class Pair<
    Type,
    Object extends Recursive<Type> = Recursive<Type>
> implements
    Iterable<[Property<Object>[], Type]>
{

    protected keys : number[] = [];

    constructor(
        public record : Object,
        public validation : Guard<any, Type>,
    ) {

    }

    * [Symbol.iterator](): Iterator<[Property<Object>[], Type]> {

        for(const [property, value] of this.record.entries()) {

           // const value : Type = <Type>this.record[property];
            const properties = [...this.keys, property];

            if(this.validation(value)) {

                yield [<Property<Object>[]>properties, value];

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
