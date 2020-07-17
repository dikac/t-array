import ValueMessage from "../../../../boolean/string/value";

export default function Value(valid: boolean, index: number) {

    return ValueMessage(valid, index, 'Validator or array of Validator')
}
