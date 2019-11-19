export default function Type<Value>(values : Value[]) : values is Value[] {

    return Array.isArray(values);
}
