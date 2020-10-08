import Equal from "@dikac/t-boolean/equal";

export default function  Indexes<Value> (
    array : ReadonlyArray<Value>,
    value : Value,
    validator : (value : Value, argument : Value) => boolean = Equal,
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
