import Validator from "@dikac/t-validator/validator";
import InferArgument from "@dikac/t-validator/infer/argument";
import Recursive from "../../../recursive/recursive";

type Argument<Schema extends Recursive<Validator<unknown>>> = {
    [Key in keyof Schema] : Schema[Key] extends  Recursive<Validator<unknown>> ? Argument<Schema[Key]> : InferArgument<Schema[Key]>
};

export default Argument;
