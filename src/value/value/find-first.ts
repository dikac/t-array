import Equal from "@dikac/t-boolean/equal";
import Value from "@dikac/t-value/value";
import Validation from "@dikac/t-boolean/validation/validation";
import StrictOmit from "@dikac/t-object/strict-omit";

export interface All<ValueType, CompareType, DefaultType> extends Value<ValueType[]>{
    default : DefaultType,
    compare : CompareType,
    validation : (value : ValueType, compare : CompareType) => boolean
}

export type WithoutValidation<ValueType, Default> = StrictOmit<All<ValueType, ValueType, Default>, 'validation'>;
export type WithoutDefault<ValueType, CompareType> = StrictOmit<All<ValueType, CompareType, undefined>, 'default'>
export type WithoutDefaultValidation<ValueType> = StrictOmit<All<ValueType, ValueType, undefined>, 'validation'|'default'>


/**
 * all option
 *
 * @param argument
 * @constructor
 */
export default function FindFirst<ValueType, CompareType, Default>(argument : All<ValueType, CompareType, Default>) : ValueType|Default;



/**
 * no validation
 *
 * @param argument
 * @constructor
 */
export default function FindFirst<ValueType, Default>(argument : WithoutValidation<ValueType, Default>) : ValueType|Default;




/**
 * no default
 *
 * @param argument
 * @constructor
 */
export default function FindFirst<ValueType, CompareType>(argument : WithoutDefault<ValueType, CompareType>) : ValueType|undefined;




/**
 * no default & validation
 *
 * @param argument
 * @constructor
 */
export default function FindFirst<ValueType>(argument : WithoutDefaultValidation<ValueType>) : ValueType|undefined;

/**
 *
 * @param argument
 * @constructor
 */
export default function FindFirst<
    ValueType,
    CompareType extends ValueType,
    DefaultType,
>(
    argument : All<ValueType, CompareType, DefaultType>
) : ValueType|DefaultType {

    let validation = argument.validation || Equal;

    for(let value of argument.value) {

        if(validation(value, argument.compare)) {

            return value;
        }
    }

    return  argument.default;
}
