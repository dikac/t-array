import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "./validatables/validatables";
import FunctionSingle from "@dikac/t-function/function-single";
import { List } from "ts-toolbelt";
export default class Callback<ValidatablesT extends Validatable[] = Validatable[], Boolean extends boolean = boolean> implements Validatable, Validatables<ValidatablesT> {
    validatables: ValidatablesT;
    validation: FunctionSingle<ValidatablesT, Boolean>;
    constructor(validatables: ValidatablesT, validation: FunctionSingle<ValidatablesT, Boolean>);
    get valid(): Boolean;
    [Symbol.iterator](): Iterator<List.UnionOf<ValidatablesT>>;
}
