import Random from "@dikac/t-boolean/random";

/**
 * pick a random values
 *
 * @param array
 * @param random
 * @constructor
 */
export default function RandomGets<T>(array : T[], random : ()=> boolean = Random) : T[] {

    let gets : T[]= [];

    for (let data of array) {

        if (random()) {

            gets.push(data);

        }
    }

    return gets;
}