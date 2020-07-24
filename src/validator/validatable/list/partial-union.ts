import Validator from "@dikac/t-validator/validator";
import {List} from "ts-toolbelt";
import Map from "./map";
import Partial from "./partial";

type PartialUnion<Schema extends Validator[]> = Map<Schema>|Partial<Schema>|List.UnionOf<Map<Schema>>[];

export default PartialUnion;
