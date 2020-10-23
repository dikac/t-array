import Equal from "@dikac/t-boolean/equal";

export default function  Indexes<Value, Compare> (
    array : ReadonlyArray<Value>,
    value : Compare,
    validator : (value : Value, argument : Compare) => boolean = <(value : Value, argument : Compare) => boolean>Equal,
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
