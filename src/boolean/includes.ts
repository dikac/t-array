import StringIncludes from "./string/includes";
import Equal from "@dikac/t-boolean/equal";

export default function Includes<Type>(
    value : Type,
    trues : Type[],
    falses : Type[],
    defaults : (value:Type, trues:Type[], falses:Type[])=>boolean = (value, trues, falses) => {throw new Error(StringIncludes(false, value, trues, falses))},
    compare : (value:Type, compare:Type)=>boolean = Equal,
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
