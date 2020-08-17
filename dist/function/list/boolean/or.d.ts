import { Guard, Validation } from "./and";
import { List } from "ts-toolbelt";
/**
 *
 * @param value
 * @param validations
 */
export default function Or<Result extends unknown[]>(value: unknown, validations: Guard<Result>): value is List.UnionOf<Result>;
export default function Or<Result extends unknown[]>(value: unknown, validations: Validation<Result>): boolean;
