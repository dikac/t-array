import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "./validatables/validatables";
import FunctionSingle from "@dikac/t-function/function-single";
import {List} from "ts-toolbelt";

export default class Callback<
    Record extends Validatable[] = Validatable[],
    Boolean extends boolean = boolean
> implements
    Validatable,
    Validatables<Record>
{
    constructor(
        public validatables : Record,
        public validation : FunctionSingle<Record, Boolean>
    ) {
    }

    get valid() : Boolean {

        return this.validation(this.validatables)
    }

    * [Symbol.iterator](): Iterator<List.UnionOf<Record>> {

        yield * this.validatables;
    }
}
