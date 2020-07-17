import RandomBoolean from "@dikac/t-boolean/random";

/**
 * pick a random values
 *
 * @param array
 * @param random
 * @constructor
 */
export default function Random<T>(array : T[], random : ()=> boolean = RandomBoolean) : T[] {

    let gets : T[]= [];

    for (let data of array) {

        if (random()) {

            gets.push(data);

        }
    }

    return gets;
}
