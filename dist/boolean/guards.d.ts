import Guard from "@dikac/t-function/boolean/guard";
export default function Guards<Type>(value: unknown, singular: Guard<unknown, Type>): value is Type[];
