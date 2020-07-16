import Function from "@dikac/t-function/function";

export default function Equal<Value>(
    array1 : Value[],
    array2 : Value[],
    compare : Function<[Value, Value], boolean> = (value1 : Value, value2 : Value) => value1 === value2
) : boolean {

    if(array1.length !== array2.length) {

        return false;
    }

    let valids : (number|string)[] = [];

    PARENT : for(let i in array1) {

        for(let j in array2) {

            if(valids.includes(j)) {

                continue ;
            }

            if(compare(array1[i], array2[j])) {

                valids.push(j);

                continue PARENT;
            }
        }

        return false;
    }

    if(array1.length === valids.length) {

        return true;
    }

    return false;
}
