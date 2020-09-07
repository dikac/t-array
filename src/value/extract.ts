/**
 * get and remove selected value
 *
 * @param array
 * @param index
 * if negative will start at the end
 *
 * @constructor
 */
export default function Extract<Data>(array : Data[], index: number): Data | undefined {

    return array.splice(index, 1)[0];
}