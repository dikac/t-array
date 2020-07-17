import ValidatableInterface from "@dikac/t-validatable/validatable";
import Validatable from "@dikac/t-validatable/validatable";
import {List} from "ts-toolbelt";
import IterableOr from "@dikac/t-iterable/validatable/boolean/or";

export default function Or<Validatables extends ValidatableInterface[]>(
    validatables : Validatables,
    defaults : boolean = true
) : Validatables & Readonly<Validatable> & {defaults:boolean} {

    let values =  new class extends Array<List.UnionOf<Validatables>> {

        readonly defaults : boolean = defaults;

        constructor() {

            super(...validatables);
        }

        get valid() : boolean {

            return IterableOr(this, this.defaults);
        }
    }

    return <any> values;
}

