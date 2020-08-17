import { Union, List } from "ts-toolbelt";
/**
 * callback boolean mapping
 */
export declare type Validation<Values extends any[]> = {
    [Key in keyof Values]: (value: any) => boolean;
};
/**
 * callback guard mapping
 */
export declare type Guard<Values extends any[]> = {
    [Key in keyof Values]: (value: any) => value is Values[Key];
};
/**
 *
 * @param value
 * @param validations
 */
export default function And<Result extends unknown[]>(value: unknown, validations: Guard<Result>): value is Union.IntersectOf<List.UnionOf<Result>>;
export default function And<Result extends unknown[]>(value: unknown, validations: Validation<Result>): boolean;
