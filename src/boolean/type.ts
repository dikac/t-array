export default function Type<Value>(values : any) : values is Value[] {

    return Array.isArray(values);
}
