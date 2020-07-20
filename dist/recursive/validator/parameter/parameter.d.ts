import Validator from "@dikac/t-validator/validator";
import InferArgument from "@dikac/t-validator/parameter/parameter";
import RecursiveArray from "../../recursive";
declare type Parameter<Schema extends RecursiveArray<Validator<unknown>>> = {
    [Key in keyof Schema]: Schema[Key] extends RecursiveArray<Validator<unknown>> ? Parameter<Schema[Key]> : InferArgument<Schema[Key]>;
};
export default Parameter;
