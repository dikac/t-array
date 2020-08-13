import { List } from "ts-toolbelt";
/**
 * reset array index
 * @param argument
 */
export default function Reset<Argument extends unknown[]>(argument: Argument): List.UnionOf<List.Required<Argument>>[];
