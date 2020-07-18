export default function Array<Assumption extends unknown[]>(values : unknown) : values is Assumption {

    return globalThis.Array.isArray(values);
}
