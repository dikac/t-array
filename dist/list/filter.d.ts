import { List } from "ts-toolbelt";
import Fn from "@dikac/t-function/function";
import Guard from "@dikac/t-function/boolean/guard";
/**
 * recursively filter {@param list} value, returning new object with all value allowed
 * by {@param filter}
 *
 * {@param validation} is used to distinguish between value to be validated by {@param filter} or tobe called
 * recursively
 *
 * {@param empty} default {false}, keep empty array or remove on sub array
 *
 */
export default function Filter<Type, Object extends List.List<Type>>(list: Object, validation: Guard<unknown, Type>, filter: Fn<[Type], boolean>, empty?: boolean): List.Partial<Object>;
