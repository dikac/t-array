import Validator from "@dikac/t-validator/validator";
import {List} from "ts-toolbelt";
import Map from "./map";

type Partial<Schema extends Validator[]> = List.Partial<Map<Schema>>;

export default Partial;
