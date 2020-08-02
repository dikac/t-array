import Validatable from "@dikac/t-validatable/validatable";
import Validatables from "./validatables/validatables";
import FunctionSingle from "@dikac/t-function/function-single";
import { List } from "ts-toolbelt";
export default class Callback<Record extends Validatable[] = Validatable[], Boolean extends boolean = boolean> implements Validatable, Validatables<Record> {
    validatables: Record;
    validation: FunctionSingle<Record, Boolean>;
    constructor(validatables: Record, validation: FunctionSingle<Record, Boolean>);
    get valid(): Boolean;
    [Symbol.iterator](): Iterator<List.UnionOf<Record>>;
}
