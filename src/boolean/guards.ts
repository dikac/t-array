import Guard from "@dikac/t-function/boolean/guard";

export default function Guards<Type>(
    value : unknown,
    singular : Guard<unknown, Type>
) : value is Type[] {

    if(!Array.isArray(value)) {

        return false;
    }

    for(let val of value) {

        if(!singular(val)) {

            return false;
        }
    }

    return true;
}
