import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "./validatables/validatables";
import {List} from "ts-toolbelt";

export default class Callback<
    ValidatablesT extends Validatable[] = Validatable[],
    Boolean extends boolean = boolean
> implements
    Validatable,
    Validatables<ValidatablesT>
{
    constructor(
        public validatables : ValidatablesT,
        public validation : (results:ValidatablesT)=>Boolean
    ) {
    }

    get valid() : Boolean {

        return this.validation(this.validatables)
    }

    * [Symbol.iterator](): Iterator<List.UnionOf<ValidatablesT>> {

        yield * this.validatables;
    }
}
