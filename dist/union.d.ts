import { List } from "ts-toolbelt";
declare type Union<Schema extends unknown[]> = Schema | List.UnionOf<Schema>[];
export default Union;
