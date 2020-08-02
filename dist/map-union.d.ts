import { List } from "ts-toolbelt";
declare type MapUnion<Schema extends unknown[]> = Schema | List.UnionOf<Schema>[];
export default MapUnion;
