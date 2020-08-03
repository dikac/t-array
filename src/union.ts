import {List} from "ts-toolbelt";

type Union<Schema extends unknown[]> =
    Schema |
    List.UnionOf<Schema>[];

export default Union;
