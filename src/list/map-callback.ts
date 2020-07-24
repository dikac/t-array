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
export default function MapCallback<Replace, Value, Key extends PropertyKey, Object extends Value[] = Value[]/*Recursive<Value> = Recursive<Value>*/>(
    object : Object,
    validation : Guard<unknown, Value>,
    replace : Function<[Value], Replace>
) : Map<Object, Value, Replace> {

    let result : any[] = [];

    for(const [index, value] of object.entries()) {

        if(validation(value)) {

            result[index] = replace(value);

        }  else {

            // TODO IMPROVE VALIDATION TO STRING
            throw ValueValidation(index, 'valid', validation.toString())
        }
    }

    return <any> result;
}

