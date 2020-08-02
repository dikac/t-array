import {List} from "ts-toolbelt";

type MapUnion<Schema extends unknown[]> =
    Schema |
    List.UnionOf<Schema>[];

export default MapUnion;
