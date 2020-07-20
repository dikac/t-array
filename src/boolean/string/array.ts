import FunctionSingle from "@dikac/t-function/function-single";

export default function Array(
    valid : boolean,
    value : unknown,
    conversion : FunctionSingle<unknown, string> = (v) => typeof v
) : string {

    let string = conversion(value);

    if(valid) {

        return `value "${string}" is array`;

    } else {

        return `value "${string}" is not array`;
    }
}
