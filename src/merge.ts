import {List, Union} from "ts-toolbelt";

type Merge<Types extends unknown[]> = Union.IntersectOf<List.UnionOf<Types>>

export default Merge;



