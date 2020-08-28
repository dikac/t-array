import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "./validatables/validatables";
import { List } from "ts-toolbelt";
export default class Callback<ValidatablesT extends Validatable[] = Validatable[], Boolean extends boolean = boolean> implements Validatable, Validatables<ValidatablesT> {
    validatables: ValidatablesT;
    validation: (results: ValidatablesT) => Boolean;
    constructor(validatables: ValidatablesT, validation: (results: ValidatablesT) => Boolean);
    get valid(): Boolean;
    [Symbol.iterator](): Iterator<List.UnionOf<ValidatablesT>>;
}
