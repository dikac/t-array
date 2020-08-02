import Validator from "@dikac/t-validator/validator";
import {List} from "ts-toolbelt";
import ListStrict from "./infer";

type PartialUnion<Schema extends Validator[]> =
    ListStrict<Schema> |
    List.UnionOf<ListStrict<Schema>>[];

export default PartialUnion;
