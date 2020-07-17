import Empty from "../boolean/empty";
import Recursive from "./recursive";
import Map from "./map";
import ValueValidation from "../assert/throwable/value-validation";
import Function from "@dikac/t-function/function";
import Guard from "@dikac/t-function/boolean/guard";

/**
 * Calls {@param replace} on each property value from {@param object} recursively
 *
 * {@template Replace} type of replace result
 *
 * {@param replace} is only called when {@param validation} result of value is true
 * {@param validation} is used for distinguish value to be used for {@param replace} or to be used for recursion
 */
export default function MapCallback<Replace, Value, Key extends keyof any = keyof any, Object extends Recursive<Value> = Recursive<Value>>(
    object : Object,
    validation : Guard<any, Value>,
    replace : Function<[Value], Replace>
) : Map<Replace, Value, Object> {

    let result : Map<Replace, Value, Object> = <Map<Replace, Value, Object>>{};


    for(const [index, value] of object.entries()) {

       // const value = object[property];

        if(validation(value)) {

            // @ts-ignore
            result[index] = replace(value);

        } else if(Object(value)) {

            // @ts-ignore
            const val = MapCallback(value, validation, replace);

            if(!Empty(val, true)) {

                // @ts-ignore
                result[index] = val;
            }

        } else {


            // TODO IMPROVE VALIDATION TO STRING
            throw ValueValidation(index, 'valid', validation.toString())
        }
    }

    return result;
}

