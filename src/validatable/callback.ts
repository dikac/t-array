import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "./validatables/validatables";
import {List} from "ts-toolbelt";

export default class Callback<
    ValidatablesType extends Validatable[] = Validatable[],
    Boolean extends boolean = boolean
> implements
    Validatable,
    Validatables<ValidatablesType>
{
    constructor(
        public validatables : ValidatablesType,
        public validation : (results:ValidatablesType)=>Boolean
    ) {
    }

    get valid() : Boolean {

        return this.validation(this.validatables)
    }

    * [Symbol.iterator](): Iterator<List.UnionOf<ValidatablesType>> {

        yield * this.validatables;
    }
}
