import Value from "@dikac/t-value/value";
import StrictOmit from "@dikac/t-object/strict-omit";
export interface All<ValueType, CompareType, DefaultType> extends Value<ValueType[]> {
    default: DefaultType;
    compare: CompareType;
    validation: (value: ValueType, compare: CompareType) => boolean;
}
export declare type WithoutValidation<ValueType, Default> = StrictOmit<All<ValueType, ValueType, Default>, 'validation'>;
export declare type WithoutDefault<ValueType, CompareType> = StrictOmit<All<ValueType, CompareType, undefined>, 'default'>;
export declare type WithoutDefaultValidation<ValueType> = StrictOmit<All<ValueType, ValueType, undefined>, 'validation' | 'default'>;
/**
 * all option
 *
 * @param argument
 * @constructor
 */
export default function FindFirst<ValueType, CompareType, Default>(argument: All<ValueType, CompareType, Default>): ValueType | Default;
/**
 * no validation
 *
 * @param argument
 * @constructor
 */
export default function FindFirst<ValueType, Default>(argument: WithoutValidation<ValueType, Default>): ValueType | Default;
/**
 * no default
 *
 * @param argument
 * @constructor
 */
export default function FindFirst<ValueType, CompareType>(argument: WithoutDefault<ValueType, CompareType>): ValueType | undefined;
/**
 * no default & validation
 *
 * @param argument
 * @constructor
 */
export default function FindFirst<ValueType>(argument: WithoutDefaultValidation<ValueType>): ValueType | undefined;
