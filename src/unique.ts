export default function Unique<Value>(
    values : Value[],
    compare : (value1 : Value, value2 : Value) => boolean
    = (value1 : Value, value2 : Value) => value1 === value2
) : Value[] {

    let results : Value[] = [];

    let added : string[] = [];

    PARENT: for(let index1 in values) {

        //if(added.includes(index1)) {

            //continue;
       // }

        for(let result of results) {

            if(compare(values[index1], result)) {

                continue PARENT;
            }
        }

        //added.push(index1);


        results.push(values[index1]);
    }

    return results;
}