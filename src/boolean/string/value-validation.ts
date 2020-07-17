import Value from "./value";

export default function ValueValidation(valid : boolean, index : number, type : string, validation : string) : string {

    let message = Value(valid, index, type);
    return `${message}, against "${validation}"`;

}
