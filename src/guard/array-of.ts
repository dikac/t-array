export default function ArrayOf<Type>(
    value : unknown,
    singular : (value : any) => value is Type
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
