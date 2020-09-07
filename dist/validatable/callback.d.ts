import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "./validatables/validatables";
import { List } from "ts-toolbelt";
export default class Callback<ValidatablesType extends Validatable[] = Validatable[], Boolean extends boolean = boolean> implements Validatable, Validatables<ValidatablesType> {
    validatables: ValidatablesType;
    validation: (results: ValidatablesType) => Boolean;
    constructor(validatables: ValidatablesType, validation: (results: ValidatablesType) => Boolean);
    get valid(): Boolean;
    [Symbol.iterator](): Iterator<List.UnionOf<ValidatablesType>>;
}
