/**
 * randomize {@param array} array position
 *
 *
 * @param random
 * random factory to be used to reorder {@param array}
 * non cryptographic random if not provided
 *
 * @return the same as argument {@param array}
 */
import Random from "@dikac/t-boolean/random";

export default function Shuffle<Value>(
    array : Value[],
    random : ()=>boolean = Random
) : Value[] {

    const result : Value[] = [];

    for (let value of array) {

        switch (random()) {
            case true :
                result.push(value);
                break;
            case false :
                result.unshift(value);
                break;
        }
    }

    return result;
}
