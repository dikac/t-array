export default function Array<Assumption extends unknown[]>(values : any) : values is Assumption {

    return globalThis.Array.isArray(values);
}
