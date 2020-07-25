import { List } from "ts-toolbelt";
export default function Reset<Argument extends List.Partial<unknown[]>>(argument: Argument): List.UnionOf<List.Required<Argument>>[];
