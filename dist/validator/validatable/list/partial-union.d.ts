import Validator from "@dikac/t-validator/validator";
import { List } from "ts-toolbelt";
import ListStrict from "./list";
import Partial from "./partial";
declare type PartialUnion<Schema extends Validator[]> = ListStrict<Schema> | Partial<Schema> | List.UnionOf<ListStrict<Schema>>[];
export default PartialUnion;
