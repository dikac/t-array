import Validator from "@dikac/t-validator/validator";
import InferArgument from "@dikac/t-validator/parameter/parameter";
import RecursiveArray from "../../../recursive/recursive";
declare type Recursive<Schema extends RecursiveArray<Validator<unknown>>> = {
    [Key in keyof Schema]: Schema[Key] extends RecursiveArray<Validator<unknown>> ? Recursive<Schema[Key]> : InferArgument<Schema[Key]>;
};
export default Recursive;
