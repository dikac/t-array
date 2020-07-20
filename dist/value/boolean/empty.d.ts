import Value from "@dikac/t-value/value";
export default function Empty(object: Value<any[]> & {
    empty: boolean;
}): boolean;
