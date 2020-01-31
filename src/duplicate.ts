export default function Duplicate<Value>(
    values : Value[],
    compare : (value1 : Value, value2 : Value)=>boolean = (value1 : Value, value2 : Value) => value1 === value2
) : Value[] {

    let duplicates : Value[] = [];

    for(let [index1, value1] of values.entries()) {

        for(let [index2, value2] of values.entries()) {

            if(index1 === index2) {

                continue;
            }

            if(compare(value1, value2)) {

                duplicates.push(value1);
                break;
            }
        }
    }

    return duplicates;
}