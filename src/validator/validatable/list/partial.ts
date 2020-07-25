import Validator from "@dikac/t-validator/validator";
import {List} from "ts-toolbelt";
import InferReturn from "@dikac/t-validator/validatable/validatable";

type Partial<Schema extends List.Partial<Validator[]>> = {
    [Key in keyof Schema] ? : InferReturn<Schema[Key]>
};

export default Partial;
