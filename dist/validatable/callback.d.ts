import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "./validatables/validatables";
import { List } from "ts-toolbelt";
export default class Callback<ValidatablesType extends ReadonlyArray<Validatable> = ReadonlyArray<Validatable>, Boolean extends boolean = boolean> implements Validatable, Validatables<ValidatablesType> {
    validatables: ValidatablesType;
    validation: (results: ValidatablesType) => Boolean;
    readonly valid: boolean;
    constructor(validatables: ValidatablesType, validation: (results: ValidatablesType) => Boolean);
    [Symbol.iterator](): Iterator<List.UnionOf<ValidatablesType>>;
}
