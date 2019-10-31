export default function  Indexes<Value> (
    array : Value[],
    value : Value,
    validator : (value : Value, argument : Value) => boolean
     = (value : Value, argument : Value) => value === argument,
    start : number = 0,
    end : number = Infinity,
) : number[] {

    let indexes : number[] = [];

    for(let i = start; array[i] !== undefined && i <= end; i++) {

        if(validator(array[i], value)) {

            indexes.push(i);
        }
    }

    return indexes;

}