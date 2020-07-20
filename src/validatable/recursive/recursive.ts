import Validator from "@dikac/t-validator/validator";
import InferReturn from "@dikac/t-validator/validatable/validatable";
import RecursiveArray from "../../recursive/recursive";

type Recursive<Tuple extends RecursiveArray<Validator<unknown>>> = {
    [Key in keyof Tuple] : Tuple[Key] extends Validator<unknown>[] ? Recursive<Tuple[Key]> : InferReturn<Tuple[Key]>
};

export default Recursive;
