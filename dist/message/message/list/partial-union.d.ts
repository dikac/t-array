import Message from "@dikac/t-message/message";
import { List } from "ts-toolbelt";
import ListStrict from "./infer";
declare type PartialUnion<Schema extends Message[]> = ListStrict<Schema> | List.UnionOf<ListStrict<Schema>>[];
export default PartialUnion;
