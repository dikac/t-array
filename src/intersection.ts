/**
 * return all data from targets that does not exists in comparison
 *
 * @param compare
 * @param arrays
 * @constructor
 */
export default function Intersection<Value>(
    compare : (target : Value, comparison : Value) => boolean = (target : Value, comparison : Value) => target === comparison,
    ...arrays : Value[][]
) : Value[] {

    switch(arrays.length) {
        case 0 : return [];
        case 1 : return <Value[]>arrays.shift();
    }

    let intersection = <Value[]> arrays.shift();

    for (const array of arrays) {

        intersection = intersection.filter((value1)=>{

            for (const value2 of array) {

                if(compare(value1, value2)) {

                    return true;
                }
            }

            return false;
        })
    }

    return intersection;

}