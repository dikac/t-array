import Recursive from "./recursive";
import { O } from "ts-toolbelt";
import Fn from "@dikac/t-function/function";
import Guard from "@dikac/t-function/boolean/guard";
/**
 * recursively filter {@param record} value, returning new object with all value allowed
 * by {@param filter}
 *
 * {@param validation} is used to distinguish between value to be validated by {@param filter} or tobe called
 * recursively
 *
 * {@param empty} default {false}, keep empty array or remove on sub array
 *
 */
export default function Filter<Type, Object extends Recursive<Type> = Recursive<Type>>(record: Object, validation: Guard<any, Type>, filter: Fn<[Type], boolean>, empty?: boolean): O.Partial<Object, 'deep'>;
