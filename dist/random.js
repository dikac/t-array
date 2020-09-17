import RandomBoolean from "@dikac/t-boolean/random";
/**
 * pick a random values
 *
 * @param array
 * @param random
 */
export default function Random(array, random = RandomBoolean) {
    let gets = [];
    for (let data of array) {
        if (random()) {
            gets.push(data);
        }
    }
    return gets;
}
//# sourceMappingURL=random.js.map