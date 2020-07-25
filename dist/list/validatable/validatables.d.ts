import Validatable from "@dikac/t-validatable/validatable";
import ValidatablesInterface from "../validatables/validatables";
import FunctionSingle from "@dikac/t-function/function-single";
import { List } from "ts-toolbelt";
export default class Validatables<Record extends List.Partial<Validatable[]> = List.Partial<Validatable[]>, Boolean extends boolean = boolean> implements Validatable, ValidatablesInterface<Record> {
    validatables: Record;
    validation: FunctionSingle<Record, Boolean>;
    constructor(validatables: Record, validation: FunctionSingle<Record, Boolean>);
    get valid(): Boolean;
}
