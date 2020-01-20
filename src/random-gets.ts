import Random from "@dikac/t-boolean/random";

export default function RandomGets<T>(array : T[]) : T[] {

    let gets : T[]= [];

    for (let data of array) {

        if (Random()) {

            gets.push(data);

        }
    }

    return gets;
}