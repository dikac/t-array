import Function from "@dikac/t-function/function";
import {throws} from "assert";
import StringIncludes from "./string/includes";



export default function Includes<Type>(
    value : Type,
    trues : Type[],
    falses : Type[],
    defaults : Function<[Type, Type[], Type[]], boolean> = (value, trues, falses) => {throw new Error(StringIncludes(false, value, trues, falses))},
    compare : Function<[Type, Type], boolean> = (value1, value2) => value1 === value2,
) : boolean {

    for(const val of trues) {

        if(compare(value, val)) {

            return true;
        }
    }

    for(const val of falses) {

        if(compare(value, val)) {

            return false;
        }
    }

    return defaults(value, trues, falses);
}
