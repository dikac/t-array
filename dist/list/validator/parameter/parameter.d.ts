import Validator from "@dikac/t-validator/validator";
import InferArgument from "@dikac/t-validator/parameter/parameter";
declare type Parameter<Schema extends Validator[]> = {
    [Key in keyof Schema]: InferArgument<Schema[Key]>;
};
export default Parameter;
