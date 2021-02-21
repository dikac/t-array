import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "./validatables/validatables";
import {List} from "ts-toolbelt";

export default class Callback<
    ValidatablesType extends ReadonlyArray<Validatable> = ReadonlyArray<Validatable>,
    Boolean extends boolean = boolean
> implements
    Validatable,
    Validatables<ValidatablesType>
{
    readonly valid : boolean;

    constructor(
        public validatables : ValidatablesType,
        public validation : (results:ValidatablesType)=>Boolean
    ) {

        this.valid = this.validation(this.validatables);
    }

    * [Symbol.iterator](): Iterator<List.UnionOf<ValidatablesType>> {

        yield * this.validatables;
    }
}
