import RandomBoolean from "@dikac/t-boolean/random";

/**
 * pick a random values
 *
 * @param array
 * @param random
 */
export default function Random<Value>(array : Value[], random : ()=> boolean = RandomBoolean) : Value[] {

    let gets : Value[]= [];

    for (let data of array) {

        if (random()) {

            gets.push(data);

        }
    }

    return gets;
}
