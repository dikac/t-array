import ValidatableInterface from "@dikac/t-validatable/validatable";
import IterableAnd from "@dikac/t-iterable/validatable/boolean/and";
import {List} from "ts-toolbelt";
import Validatable from "@dikac/t-validatable/validatable";
import Value from "@dikac/t-value/value";

export default function And<Validatables extends ValidatableInterface[]>(
    validatables : Validatables,
    defaults : boolean = true
) : Validatables & Readonly<Validatable> & {defaults:boolean} & Readonly<Value<Validatables>> {

    let values =  new class extends Array<List.UnionOf<Validatables>> {

        readonly defaults : boolean = defaults;

        constructor() {

            super(...validatables);
        }

        get valid() : boolean {

            return IterableAnd(this, this.defaults);
        }

        get value () : Value<Validatables> {

            return <any> this;
        }
    }

    return <any> values;
}

