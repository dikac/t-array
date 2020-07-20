// import Recursive from "./recursive";
import Empty from "../boolean/empty";
import {List} from "ts-toolbelt";
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
export default function Filter<
    Type,
    Object extends List.List<Type>//Recursive<Type> = Recursive<Type>
>(
    record : Object,
    validation : Guard<unknown, Type>,
    filter : Fn<[Type], boolean>,
    empty : boolean = false
) : List.Partial<Object> {

    let result : [] = [];

    for(const property in record) {

        const value : Type = <Type>record[property];

        if(validation(value)) {

            if(filter(value)) {

                // @ts-ignore
                result[property] = value;
            }

        } else if(Array.isArray(value)) {

            const results = Filter(value, validation, filter);

            if(!empty) {

                if(!Empty(results, true)) {

                    result[property] = results;
                }

            } else {

                result[property] = results;
            }
        }
    }

    return <any>result;
}
