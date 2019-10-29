export default function Extract<Data>(array : Data[], index: number): Data | undefined {

    return array.splice(index, 1)[0];
}