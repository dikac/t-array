import {List} from "ts-toolbelt";
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
export default function Filter<
    Type extends List.UnionOf<Object>,
    Object extends any[]
    >(
    list : Object,
    filter : Guard<Type, Type>,
) : List.Select<Object, Type>;

export default function Filter<
    Object extends any[]
    >(
    list : Object,
    filter : Fn<[List.UnionOf<Object>], boolean>,
) : List.Partial<Object>;


export default function Filter<
    Type,
    Object extends List.List<Type>
>(
    list : Object,
    filter : Fn<[Type], boolean>,
) : List.Partial<Object> | List.Select<Object, Type> {

    let result : [] = [];

    for(const property in list) {

        const value : Type = <Type>list[property];

        if(filter(value)) {

            // @ts-ignore
            result[property] = value;
        }
    }

    return <any>result;
}
