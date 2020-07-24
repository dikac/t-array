import Value from "@dikac/t-value/value";
export default function Empty(object: Value<undefined[]> & {
    empty: boolean;
}): boolean;
