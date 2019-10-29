import Index from "../number";
import RemoveIndex from "./remove-index";

export default function RemoveValue<Value = any>(
    array : Value[],
    value : Value ,
    validator : (arrayValue : Value, valueArgument : Value) => boolean,
    fromIndex : number = 0
) : boolean {

    let index = Index(array, value, validator, fromIndex);

    if(index != null) {

        return RemoveIndex(array, index);
    }

    return false;
}