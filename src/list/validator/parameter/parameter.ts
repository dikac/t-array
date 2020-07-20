import Validator from "@dikac/t-validator/validator";
import InferArgument from "@dikac/t-validator/parameter/parameter";
//import RecursiveArray from "../../recursive";

// type Parameter<Schema extends RecursiveArray<Validator<unknown>>> = {
//     [Key in keyof Schema] : Schema[Key] extends  RecursiveArray<Validator<unknown>> ? Parameter<Schema[Key]> : InferArgument<Schema[Key]>
// };
//
// export default Parameter;

type Parameter<Schema extends Validator[]> = {
    [Key in keyof Schema]  : InferArgument<Schema[Key]>
};

export default Parameter;
